import React from 'react';
import { LuDownload } from "react-icons/lu";

// absolute top-[800px] left-[960px] w-[300px]

const LabResults = ({results}) => {
  return (
    <div className="bg-white rounded-2xl">
    <h3 className="py-2 m-4 text-[24px] leading-[33px] font-extrabold text-left">Lab Results</h3>
    <div className="mx-2 h-[225px] overflow-y-scroll">
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