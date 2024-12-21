import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const PatientList = ({patients, patientSelect}) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex items-center justify-between py-5 mb-3 mx-3">
        <h3 className="text-[24px] leading-[33px] font-extrabold text-font text-left">
          Patients
        </h3>
        <IoIosSearch className="text-[20px]"/>
      </div>

      <div className="mx-2 h-[845px] overflow-y-scroll">

        <div className="flex flex-col items-center justify-between gap-1 my-7">        
        {patients.map((patient, index) => (
          <div 
          key={index} 
          className="flex flex-row items-center justify-between w-full p-4 hover:bg-[#01F0D0] active:bg-[#D8FCF7] cursor-pointer"
          onClick={() => patientSelect(patient)} >
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
