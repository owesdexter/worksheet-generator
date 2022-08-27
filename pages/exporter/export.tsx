import { useState, useContext, ReactElement } from 'react';
import { ExporterContext } from '@/components/providers/context/exporter'
import Layout from '@/components/layout/main';
import ExporterLayout from '@/components/layout/exporter';

export default function Export(){
  // const { currentStep } = useContext(ExporterContext);
  const [currentStep, set] = useState<number>(1);
  const {  } = useContext(ExporterContext)

  const handleChange = (index:number)=>{

  }

  return(
    <>
      <a href="mailto:john@example.com">John</a>
    </>
  )
}

Export.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      <ExporterLayout>
        {page}
      </ExporterLayout>
    </Layout>
  )
}