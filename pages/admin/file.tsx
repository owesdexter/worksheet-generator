import { useState, useContext } from 'react';
import type { ReactElement } from 'react';
import Layout from '../../components/layout/main';


export default function File(){
  const [currentStep, setCurrentStep] = useState<number>(2);
}

File.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}