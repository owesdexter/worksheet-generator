import { useState, useEffect } from 'react';
import { TLeaveOptions, ILeave, ELeaveType } from '../constants';
import { TimePicker, DatePicker, Select , Input, Space } from 'antd';
import type { Moment } from 'moment';
import { PlusCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;
const { Option } = Select;

interface ILeaveEditorProps{
  currentList: ILeave[];
  defaultValue: ILeave;
  options: TLeaveOptions[];
  minHour?: number,
  maxHour?: number,
  onChange: (list: ILeave[])=>void
  onInvalid?: (value: boolean)=>void;
}

export default function LeaveEditor({
  currentList,
  defaultValue,
  options,
  minHour,
  maxHour,
  onChange,
  onInvalid
}: ILeaveEditorProps){
  const { t } = useTranslation();

  class CLeave implements ILeave {
    startTime = new Date();
    endTime = new Date();
    type: ELeaveType;
    reason: string;
    file?: string;

    constructor(props?: ILeave){
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate()-1);

      this.startTime = props? props.startTime: yesterday;
      this.endTime = props? props.startTime: yesterday;
      this.type = props? props.type: options[0].value;
      this.reason = props? props.reason: '';
      this.file = props? props.file: '';
    }
  }

  const [list, setList] = useState<ILeave[]>(currentList);

  const checkHasSameSection = (date: Date)=>{
    return list.findIndex(el=>
      el.startTime.toLocaleDateString() === date.toLocaleDateString()
    )
  }

  const createItem = (date:Date = new Date(), counter:number=0)=>{
    const index = checkHasSameSection(date);
    if(index>=0){
      if(counter===0){
        date.setDate(27);
      }else{
        date.setDate(27-counter);
      }
      counter++;
      createItem(date, counter);
      return
    }
    const obj = new CLeave({
      startTime: date,
      endTime: date,
      type: options[0].value,
      reason: ''
    });
    setList(pre=>[...pre, obj]);
  }

  const handleStartDateChange = (value: Moment | null, dateString:string, item:ILeave, idx:number) => {
    if(!value){
      return
    }
    if(checkHasSameSection(value.toDate())>=0){
      return
    }
    const arr = [...list];
    item.startTime = value.toDate();
    arr.splice(idx, 1, item);
    setList(arr);
  };

  const handleTypeChange = (value: ELeaveType, item:ILeave, idx:number) => {
    const arr = [...list];
    item.type = value;
    arr.splice(idx, 1, item);
    setList(arr);
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>, item:ILeave, idx:number) => {
    const arr = [...list];
    item.reason = e.target.value;
    arr.splice(idx, 1, item);
    setList(arr);
  };

  const deleteItem = (idx:number)=>{
    const arr = [...list];
    arr.splice(idx, 1);
    setList(arr);
  };

  const handleStartDateStartTimeChange = (values, formatString, item:ILeave, idx:number)=>{
    console.log(values, formatString)
    console.log(item, idx)
  }

  useEffect(()=>{
    // console.log('effect', list)
    onChange(list);
  }, [list, onChange])

  return(
    <div className="">
      <div className="special-worktime-card">
        <div className="close-btn-container" onClick={()=>deleteItem(index)}>
          <CloseOutlined />
        </div>
        <div>
          <label htmlFor="">{t('__t_Leave_type')}</label>
          <Select defaultValue={el.type} onChange={(value)=>handleTypeChange(value, el, index)}>
            {options.map(option=>(
              <Option value={option.value} key={option.title}>{option.title}</Option>
            ))}
          </Select>
        </div>
        <div>
          <label htmlFor="">{t('__t_Start_time')}</label>
          <DatePicker
            defaultValue={moment(el.startTime.toLocaleDateString(), 'MM/DD/YYYY')}
            format={'YYYY/MM/DD'}
            onChange={(date, dateString)=>handleStartDateChange(date, dateString, el, index)}
          />
          <TimePicker.RangePicker
            format={'HH:mm'}
            className="time-selector"
            onChange={(values, formatString)=>handleStartDateStartTimeChange(values, formatString, el, index)}
          />
        </div>

        <div>
          <label htmlFor="">{t('__t_End_time')}</label>
          <DatePicker
            defaultValue={moment(el.startTime.toLocaleDateString(), 'MM/DD/YYYY')}
            format={'YYYY/MM/DD'}
            onChange={(date, dateString)=>handleStartDateChange(date, dateString, el, index)}
          />
          <TimePicker.RangePicker format={'HH:mm'} className="time-selector"/>
        </div>

        <div>
          <label htmlFor="">理由</label>
          <TextArea
            defaultValue={el.reason}
            placeholder={t('__t_Plz_enter_sth', {sth: t('__t_sth_Reason')})}
            autoSize={true}
            onChange={(e)=>handleReasonChange(e, el, index)}
          />
        </div>
      </div>
      <PlusCircleOutlined onClick={()=>createItem()} />
    </div>
  )
}