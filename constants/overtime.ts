import {  } from './excel';

export const MONTHLY_OVERTIME_LIMIT = 46;
export const DAILY_OVERTIME_LIMIT = 8;

export enum EOvertimeAwardType {
  Money = 'money',
  Dayoff = 'dayoff'
}

export const overTimeTypes = [
  {
    title: '__t_Overtime_pay',
    value: EOvertimeAwardType.Money,
  },
  {
    title: '__t_Overtime_vocation',
    value: EOvertimeAwardType.Dayoff,
  },
]

export interface IOvertime{
  startDate: Date;
  hour: number;
  type: string;
  reason: string;
  file?: any;
}