export enum ELeaveType {
  Annual = 'annual',
  Vaxxed = 'vaxxed',
  Sick = 'sick',
  Personal = 'personal',
  Familycare = 'familycare',
  Official = 'Official',
  Marriage  = 'marriage ',
  Funeral = 'funeral',
  Paternity = 'paternity',
}

export const leaveTypes = [
  {
    title: '__t_Annual_leave',
    value: ELeaveType.Annual,
  },
  {
    title: '__t_Vaxxed_leave',
    value: ELeaveType.Vaxxed,
  },
  {
    title: '__t_Sick_leave',
    value: ELeaveType.Sick,
  },
  {
    title: '__t_Personal_leave',
    value: ELeaveType.Personal,
  },
  {
    title: '__t_Familycare_leave',
    value: ELeaveType.Familycare,
  },
  {
    title: '__t_Official_leave',
    value: ELeaveType.Official,
  },
  {
    title: '__t_Marriage_leave',
    value: ELeaveType.Marriage,
  },
  {
    title: '__t_Funeral_leave',
    value: ELeaveType.Funeral,
  },
  {
    title: '__t_Paternity_leave',
    value: ELeaveType.Paternity,
  },
]

export interface ILeave{
  type: string;
  startTime: Date;
  endTime: Date;
  endtDate: Date;
  reason: string;
  file?: string;
}