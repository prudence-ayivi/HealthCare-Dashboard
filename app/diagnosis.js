import React from 'react'
import Image from "next/image"; 
import BloodPressureChart from "./BloodPressureChart"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";

const Diagnosis = ({diagnosis}) => {
  return (
    <div className="bg-white rounded-2xl">
    <h3 className="pt-4 pb-6 pl-3 text-[24px] leading-[33px] font-extrabold text-left">Diagnosis History</h3>

    <div className="flex flex-col w-full mx-3 gap-5"> 

    <div className="flex flex-row items-center justify-between gap-2 mr-6 p-4 bg-[#F4F0FE] rounded-[12px]">
    
    <div className="flex flex-col items-left justify-left gap-2"> 
    <div className="flex flex-row items-left justify-between gap-2">  
    <h4 className="text-[18px] leading-[24px] font-extrabold text-left">Blood Pressure</h4>
    <div className="flex flex-row items-center justify-center gap-2">
    <p className="text-left">Last 6 months</p> 
    <MdExpandMore className="text-[15px]"/>
    </div> 
    </div>
    <div className="w-full">
    <BloodPressureChart data={diagnosis} />
    </div>    
    </div>

    <div className="flex flex-col items-left justify-left gap-2"> 
    <div className="flex flex-col items-left justify-left gap-1"> 
    <div className="flex flex-row items-center justify-left gap-1">
    <div className="w-[14px] h-[14px] rounded-full border border-white bg-[#E66FD2] opacity-100"></div>
    <p className="font-bold">Systolic</p>
    </div>
    <p className="font-bold text-[22px]">{diagnosis[0].blood_pressure.systolic.value}</p>
    <div className="flex flex-row items-center justify-left">
    <IoMdArrowDropup className="text-[20px]"/>
    <p>{diagnosis[0].blood_pressure.systolic.levels}</p>
    </div>
    </div>

    <hr className="w-full h-[2px] text-[#CBC8D4]"></hr> 

    <div className="flex flex-col items-left justify-left gap-1"> 
    <div className="flex flex-row items-center justify-left gap-1">
    <div className="w-[14px] h-[14px] rounded-full border border-white bg-[#8C6FE6] opacity-100"></div>
    <p className="font-bold">Diastolic</p>
    </div>
    <p className="font-bold text-[22px]">{diagnosis[0].blood_pressure.diastolic.value}</p>
    <div className="flex flex-row items-center justify-left">
    <IoMdArrowDropup className="text-[20px]"/>
    <p>{diagnosis[0].blood_pressure.diastolic.levels}</p>
    </div>
    </div>

    </div>

    </div>

    <div className="w-full flex flex-row items-center gap-4 pr-6 mr-12 mb-4"> 
    <div className="flex flex-col items-left gap-4 p-3 w-[250px] 2xl:w-[240px] bg-[#E0F3FA] rounded-[12px]"> 
    <Image src={"/respiratory rate.png"} alt="respiratory rate" width={96} height={96} />
    <div>
      <p className="text-[16px]">Respiratory Rate</p>
      <h4 className="text-[30px] leading-[41px] font-extrabold text-left">{diagnosis[0].respiratory_rate.value} bpm</h4>
    </div>
    <p className="text-[14px] h-[19px]">{diagnosis[0].respiratory_rate.levels}</p>
    </div>
    <div className="flex flex-col items-left gap-4 p-3 w-[250px] 2xl:w-[240px] bg-[#FFE6E9] rounded-[12px]"> 
    <Image src={"/temperature.png"} alt="temperature" width={96} height={96} />
    <div>
      <p className="text-[16px]">Temperature</p>
      <h4 className="text-[30px] leading-[41px] font-extrabold text-left">{diagnosis[0].temperature.value}°F</h4>
    </div>
    <p className="text-[14px] h-[19px]">{diagnosis[0].respiratory_rate.levels}</p>
    </div>
    <div className="flex flex-col items-left gap-4 p-3 w-[250px] 2xl:w-[240px] bg-[#FFE6F1] rounded-[12px]"> 
    <Image src={"/HeartBPM.png"} alt="HeartBPM" width={96} height={96} />
    <div>
      <p className="text-[16px]">Heart Rate</p>
      <h4 className="text-[30px] leading-[41px] font-extrabold text-left">{diagnosis[0].heart_rate.value} bpm</h4>
    </div>
    <p className="text-[14px] h-[19px]">{diagnosis[0].respiratory_rate.levels}</p>
    </div>
    
    </div>
    
    </div>
    </div>
  )
}

export default Diagnosis 