import { useState, useContext, ReactElement } from 'react';
import { useExporter } from '@/components/providers/context/hooks';
import ExcelEditor from '@/components/excelEditor/worksheet';
import Layout from '@/components/layout/main';
import ExporterLayout from '@/components/layout/exporter';

export default function Preview(){
  const [currentStep, set] = useState<number>(1);
  const {  } = useExporter();

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