import { useState, useContext, useEffect } from 'react';
import { useExporter } from '@/components/providers/context/hooks'
import DayoffEditor from '@/components/dayoffEditor';
import { ELeaveType } from '@/constants';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { MONTHLY_OVERTIME_LIMIT, ILeave, leaveTypes } from '@/constants';


type TDayoffProps = {
  onInvalid?: React.Dispatch<React.SetStateAction<boolean>>;
 }

export default function Dayoff({onInvalid}: TDayoffProps){
  const { dayoff, updateDayoff } = useExporter();
  const [showMaxWarning, setShowMaxWarning] = useState<boolean>(false);
  // const [showMaxWarning, setShowMaxWarning] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleListChange = (list:ILeave[])=>{
    updateDayoff(list);
  }

  // useEffect(()=>{
  //   const total = dayoff.reduce((acc, cur)=>acc + cur.hour, 0);
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
    <div className="basic-step-container">
      <div className="step-title-container">{t('__t_Add_sth', {sth: t('__t_leave_section')})}</div>
      <DayoffEditor
        defaultHour={2}
        maxHour={8}
        options={leaveTypes}
        defaultValue={dayoff}
        onChange={handleListChange}
      />
    </div>
  )
}