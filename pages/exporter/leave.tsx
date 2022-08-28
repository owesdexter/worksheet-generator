import { ReactElement, useState, useContext, useEffect } from 'react';
import Layout from '@/components/layout/main';
import ExporterLayout from '@/components/layout/exporter';
import { useExporter } from '@/components/providers/context/hooks'
import LeaveEditor from '@/components/leaveEditor';
import { ELeaveType } from '@/constants';
import { useTranslation } from 'react-i18next';
import { MONTHLY_OVERTIME_LIMIT, ILeave, leaveTypes } from '@/constants';
import axios from 'axios';


type TLeaveProps = {
  onInvalid?: React.Dispatch<React.SetStateAction<boolean>>;
 }

export default function Leave({onInvalid}: TLeaveProps){
  const { leaveSectionList, updateLeaveSectionList } = useExporter();
  const [showMaxWarning, setShowMaxWarning] = useState<boolean>(false);
  const [list, setList] = useState<ILeave[]>(leaveSectionList);
  // const [showMaxWarning, setShowMaxWarning] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleListChange = (list:ILeave[])=>{
    updateLeaveSectionList(list);
  }

  // useEffect(()=>{
  //   const total = leave.reduce((acc, cur)=>acc + cur.hour, 0);
  //   let value = total > MONTHLY_OVERTIME_LIMIT;
  //   setShowMaxWarning(value);
  //   updateIsProhibitedNext(value);
  // }, [overtime, updateIsProhibitedNext]);

  useEffect(()=>{
    axios('/api/neuip/getLeaveResouce',{
      withCredentials: true
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    .finally(()=>{
    });
  }, [])

  return(
    <div className="">
      <div className="step-title-container">{t('__t_Add_sth', {sth: t('__t_leave_section')})}</div>
        <ul className="special-worktime-container">
          {list?.length? list.map((el, index)=>(
            <li className="special-worktime-card" key={index}>
              <LeaveEditor
                currentList={list}
                options={leaveTypes}
                defaultValue={el}
                onChange={handleListChange}
              />
            </li>
            )):null
          }
      </ul>
    </div>
  )
}

Leave.getLayout = function getLayout(page: ReactElement){
  return (
    <Layout>
      <ExporterLayout>
        {page}
      </ExporterLayout>
    </Layout>
  )
}