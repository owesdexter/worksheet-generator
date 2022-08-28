import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ref, getBytes } from 'firebase/storage';
import { storage } from '@/pages/api/firebase/getFile';
import { getWorksheetName, EXCEL_EXAMPLE_FILE_PATH, IOvertime, ILeave, ALL_ROWS_LENGTH, ELeaveType } from '@/constants';
import Excel from "exceljs";

interface IGeneralWorkTime {
  targetMonth: number,
  startTime: Date;
  sd: number,
}

export interface IExporterContext {
  generalWorkTime: IGeneralWorkTime;
  overtimeList: IOvertime[];
  leaveSectionList: ILeave[];
  isProhibitedNext: boolean;
  worksheet?: Excel.Worksheet;
  updateGeneralWorkTime: (value: IGeneralWorkTime)=>void;
  updateOvertimeList: (value: IOvertime[])=>void;
  updateLeaveSectionList: (value: ILeave[])=>void;
  updateIsProhibitedNext: (value: boolean)=>void;
  updateWorksheet: (value: Excel.Worksheet)=>void;
}

const defaultContextValue:IExporterContext = {
  generalWorkTime: {
    targetMonth: new Date().getMonth()+1,
    startTime: (()=> {
      const now = new Date();
      now.setHours(9);
      now.setMinutes(0);
      return now}
    )(),
    sd: 5,
  },
  overtimeList: [],
  leaveSectionList: [],
  isProhibitedNext: false,

  updateGeneralWorkTime: (value: IGeneralWorkTime):void =>{
    throw new Error('You probably forgot to put <ExporterContextProvider>.');
  },
  updateOvertimeList: (value: IOvertime[])=>{
    throw new Error('You probably forgot to put <ExporterContextProvider>.');
  },
  updateLeaveSectionList: (value: ILeave[])=>{
    throw new Error('You probably forgot to put <ExporterContextProvider>.');
  },
  updateIsProhibitedNext: (value: boolean)=>{
    throw new Error('You probably forgot to put <ExporterContextProvider>.');
  },
  updateWorksheet: (value: Excel.Worksheet)=>{
    throw new Error('You probably forgot to put <ExporterContextProvider>.');
  }
}

export const ExporterContext = React.createContext<IExporterContext>(defaultContextValue);


// Build Component context provider
export default function ExportContextProvider({children}: any){
  const [generalWorkTime, setGeneralWorkTime] = useState<IGeneralWorkTime>(defaultContextValue.generalWorkTime);
  const [overtimeList, setOvertimeList] = useState<IOvertime[]>([]);
  const [leaveSectionList, setLeaveSectionList] = useState<ILeave[]>([]);
  const [isProhibitedNext, setIsProhibitedNext] = useState<boolean>(false);
  const [worksheet, setWorksheet] = useState<Excel.Worksheet>();

  const updateGeneralWorkTime = useCallback((value: IGeneralWorkTime)=>{
    setGeneralWorkTime(value);
  }, [setGeneralWorkTime]);

  const updateOvertimeList = useCallback((value: IOvertime[])=>{
    setOvertimeList(value);
  }, [setOvertimeList]);

  const updateLeaveSectionList = useCallback((value: ILeave[])=>{
    setLeaveSectionList(value);
  }, [setLeaveSectionList]);

  const updateIsProhibitedNext = useCallback((value: boolean)=>{
    setIsProhibitedNext(value);
  }, [setIsProhibitedNext]);

  const updateWorksheet = useCallback((value: Excel.Worksheet)=>{
    setWorksheet(value);
  }, [setWorksheet]);

  useEffect(()=>{
    if(!generalWorkTime.targetMonth){
      return
    }
    const starsRef = ref(storage, EXCEL_EXAMPLE_FILE_PATH);
    getBytes(starsRef)
    .then(async res => {
      const workbook = new Excel.Workbook();
      await workbook.xlsx.load(res);
      const worksheet = workbook.getWorksheet(getWorksheetName(generalWorkTime.targetMonth));
      setWorksheet(worksheet);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }, [generalWorkTime])

  const contextValue = useMemo<IExporterContext>(
    () => ({
      generalWorkTime,
      overtimeList,
      leaveSectionList,
      isProhibitedNext,
      worksheet,
      updateGeneralWorkTime,
      updateOvertimeList,
      updateLeaveSectionList,
      updateIsProhibitedNext,
      updateWorksheet
    }),
    [
      generalWorkTime,
      overtimeList,
      leaveSectionList,
      isProhibitedNext,
      worksheet,
      updateGeneralWorkTime,
      updateOvertimeList,
      updateLeaveSectionList,
      updateIsProhibitedNext,
      updateWorksheet
    ],
  );

  return(
    <ExporterContext.Provider value={contextValue}>
      {children}
    </ExporterContext.Provider>
  )
}
