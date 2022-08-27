import { useState, useContext, ReactElement } from 'react';
import { ExporterContext } from '@/components/providers/context/exporter';
import ExcelEditor from '@/components/excelEditor/worksheet';
import Layout from '@/components/layout/main';
import ExporterLayout from '@/components/layout/exporter';

export default function Preview(){
  // const { currentStep } = useContext(ExporterContext);
  const [currentStep, set] = useState<number>(1);
  const {  } = useContext(ExporterContext)

  const handleChange = (index:number)=>{
  }

  return(
    <>
      Preview
      <ExcelEditor />
    </>
  )
}

Preview.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      <ExporterLayout>
        {page}
      </ExporterLayout>
    </Layout>
  )
}