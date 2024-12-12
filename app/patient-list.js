import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const PatientList = ({patients}) => {
  return (
    <div className="absolute top-[108px] left-4 h-[925px] bg-white rounded-2xl opacity-100 overflow-y-scroll">
      <div className="flex items-center justify-between m-4">
        <h3 className="text-[24px] leading-[33px] font-extrabold text-font text-left">
          Patients
        </h3>
        <IoIosSearch className="text-[20px]"/>
      </div>

      <div className="mx-4">

        <div className="flex flex-col items-center justify-between gap-1 my-8">        
        {patients.map((patient, index) => (
          <div key={index} className="flex flex-row items-center justify-between w-full p-4 hover:bg-[#01F0D0]">
          <div className="flex flex-row items-center gap-4">
          <Image src={patient.profile_picture} alt="Doctor" width={48} height={48} />
          <div>
            <h5 className="font-bold">{patient.name}</h5>
            <p className="text-subfont"> {patient.gender}, {patient.age}</p>
            </div>
          </div>
          <MdMoreHoriz className="text-[20px]"/> 
        </div>
        )
        )}
        
        </div>
      </div>
    </div>
  );
};

export default PatientList;
