import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect, useCallback } from 'react';
import ExportContextProvider from '@/components/providers/context/exporter';
import { useExporter } from '@/components/providers/context/hooks';
import { Button, message, Steps } from 'antd';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

const { Step } = Steps;

const routes = [
  {
    title: '__t_General',
    path: '/exporter',
  },
  {
    title: '__t_Overtime',
    path: '/exporter/overtime',
  },
  {
    title: '__t_Dayoff',
    path: '/exporter/dayoff',
  },
  {
    title: '__t_Preview',
    path: '/exporter/preview',
  },
  {
    title: '__t_Export',
    path: '/exporter/export',
  },
]

// TODO: declare children type
export default function SecondLayout({ children }: any): ReactElement {
  const { isProhibitedNext } = useExporter();
  const [currentStep, setCurrentStep] = useState<number>(2);
  const userInfo = useSelector((state:any) => state.user);
  const { t } = useTranslation();
  const router = useRouter();
  console.log(`render Second Layout`)

  const next = ()=>{
    if(isProhibitedNext){
      return
    }
    router.push(routes[currentStep+1].path);
    setCurrentStep(pre=> pre + 1);

  }
  const prev = ()=>{
    if(currentStep<=0){
      return
    }
    router.push(routes[currentStep-1].path);
    setCurrentStep(pre=> pre - 1);
  }

  const goStep = (value: number) => {
    if(isProhibitedNext){
      return
    }
    router.push(routes[value].path);
    setCurrentStep(value);
  };

  const done = ()=>{
    setCurrentStep(0);
    const key = 'updatable';
    message.loading({ content: 'Resetting...', key });
    setTimeout(() => {
      message.success({ content: 'Reset!', key, duration: 2 });
    }, 1000);
  };

  return (
    <div className="layout-wrapper d-flex">
      <div className="page-exporter bs5-container">
        <div className="content">
          <Steps
            current={currentStep}
            type="navigation"
            direction="vertical"
            className="site-navigation-steps step-bar-container"
            onChange={goStep}
          >
            {routes.map(el => (
              <Step key={el.title} title={t(el.title)} />
            ))}
          </Steps>

          <ExportContextProvider>
            <div className="steps-coimage.pngntent">
              {children}
            </div>
          </ExportContextProvider>
        </div>

        <div className="footer steps-action">
          {currentStep > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              {t('__t_Previous')}
            </Button>
          )}
          {currentStep < routes.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              {t('__t_Next')}
            </Button>
          )}
          {currentStep === routes.length - 1 && (
            <Button type="primary" onClick={() => done()}>
              {t('__t_Done')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}