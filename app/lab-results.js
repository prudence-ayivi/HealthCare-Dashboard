import React from 'react';
import { LuDownload } from "react-icons/lu";

const LabResults = ({results}) => {
  return (
    <div className="absolute top-[800px] left-[960px] w-[300px] bg-white rounded-2xl opacity-100">
    <h3 className="m-4 text-[24px] leading-[33px] font-extrabold text-left">Lab Results</h3>
    <div className="mx-4 h-[175px] overflow-y-scroll">
    <div className="flex flex-col gap-1">
    {results.map((result, index) => (
      <div key={index} className="flex flex-row items-center justify-between h-[40px] mr-2 p-2 text-[13px] hover:bg-background">
      <p> {result} </p> 
      <LuDownload className="text-[20px]"/>
      </div>
    )    
    )} 
    </div>
    </div>
    </div>
  )
}

export default LabResults