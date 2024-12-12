import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { TbGenderFemale } from "react-icons/tb";
import { MdOutlineLocalPhone, MdOutlineVerifiedUser } from "react-icons/md";


const PatientInfo = ({ patient }) => {
  return (
    <div className="absolute top-[108px] left-[960px] w-[300px] py-2 px-8 bg-white rounded-2xl opacity-100">
    <div className="flex flex-col items-center justify-center">
    <Image src={patient.profile_picture} alt={patient.name} width={200} height={200} className="mt-6"/>
    <h3 className="font-bold my-2 text-center text-[24px]">{patient.name}</h3>
    </div>

    <div className="flex flex-col items-left justify-left my-2 gap-4">

    <div className="flex flex-row items-center justify-left gap-4"> 
    <CiCalendar className="stroke-1 text-[20px]"/>     
    <div>
      <p>Date of Birth</p>
      <p className="font-bold">{patient.date_of_birth}</p>
    </div>
    </div>

    <div className="flex flex-row items-center justify-left gap-4"> 
    <TbGenderFemale className="text-[20px]"/>    
    <div>
      <p>Gender</p>
      <p className="font-bold">{patient.gender}</p>
    </div>
    </div>
    <div className="flex flex-row items-center justify-left gap-4"> 
    <MdOutlineLocalPhone className="text-[20px]"/>    
    <div>
      <p>Contact Info.</p>
      <p className="font-bold">{patient.phone_number}</p>
    </div>
    </div>
    <div className="flex flex-row items-center justify-left gap-4"> 
    <MdOutlineLocalPhone className="text-[20px]"/>    
    <div>
      <p>Emergency Contacts</p>
      <p className="font-bold">{patient.emergency_contact}</p>
    </div>
    </div>
    <div className="flex flex-row items-center justify-left gap-4"> 
    <MdOutlineVerifiedUser className="text-[20px]"/>
    <div>
      <p>Insurance Provider</p>
      <p className="font-bold">{patient.insurance_type}</p>
    </div>
    </div>

    </div>

    <div className="text-center">
      <button className="rounded-full bg-[#01F0D0] font-bold my-2 px-8 py-2"> Show All Information</button>
    </div>
    </div>
  )
}

export default PatientInfo