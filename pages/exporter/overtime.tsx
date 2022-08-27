import { useState, useContext, useEffect, ReactElement } from 'react';
import { useExporter } from '@/components/providers/context/hooks'
import OverTimeEditor from '@/components/overTimeEditor';
import Layout from '@/components/layout/main';
import ExporterLayout from '@/components/layout/exporter';
import { EOvertimeAwardType, MONTHLY_OVERTIME_LIMIT, IOvertime } from '../../constants';
import { useTranslation } from 'react-i18next';

const overTimeOptions = [
  {
    title: '__t_Overtime_pay',
    value: EOvertimeAwardType.Money,
  },
  {
    title: '__t_Overtime_vocation',
    value: EOvertimeAwardType.Dayoff,
  },
]

export default function Overtime(){
  const { overtime, updateOvertime, updateIsProhibitedNext } = useExporter();
  const [showMaxWarning, setShowMaxWarning] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleListChange = (list:IOvertime[])=>{
    updateOvertime(list);
  }

  useEffect(()=>{
    const total = overtime.reduce((acc, cur)=>acc + cur.hour, 0);
    let value = total > MONTHLY_OVERTIME_LIMIT;
    setShowMaxWarning(value);
    updateIsProhibitedNext(value);
  }, [overtime, updateIsProhibitedNext]);

  return(
    <div className="basic-step-container">
      <div className="step-title-container">{t('__t_Add_sth', {sth: t('__t_overtime_section')})}</div>
      <OverTimeEditor
        defaultHour={2}
        minHour={0}
        maxHour={8}
        options={overTimeOptions}
        defaultValue={overtime}
        onChange={handleListChange}
        onInvalid={updateIsProhibitedNext}
      />
      <ul className="warning-hint-container">
        {showMaxWarning?<li>{t('__t_warning_overtime_too_much_monthly', {limit: {MONTHLY_OVERTIME_LIMIT}})}</li>:null}
      </ul>
    </div>
  )
}

Overtime.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      <ExporterLayout>
        {page}
      </ExporterLayout>
    </Layout>
  )
}