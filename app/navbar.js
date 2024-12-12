import Image from "next/image";
import Link from "next/Link";
import { GoHome } from "react-icons/go";
import { MdOutlineGroup, MdChatBubbleOutline, MdMoreVert } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { TfiCreditCard } from "react-icons/tfi";
import { FaGear } from "react-icons/fa6"; 
//import { MdCreditCard } from "react-icons/md";


const navigation = [
  { name: "Overview", href: "#", current: false },
  { name: "Patients", href: "#", current: true },
  { name: "Schedule", href: "#", current: false },
  { name: "Message", href: "#", current: false },
  { name: "Transaction", href: "#", current: false },
];

const NavBar = () => {
  return (
      <div className="flex flex-row items-center justify-around fixed top-4 left-4 w-full h-[72px] bg-white rounded-full z-10 opacity-100">
        <div className="text-center">
          <Image src={"/TestLogo.svg"} alt="TestLogo" width={211} height={48} />
        </div>

        <div className="flex items-center justify-around gap-4">
        <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 hover:bg-[#01F0D0] font-bold rounded-full"> 
        <GoHome className="stroke-1 text-[20px]"/> 
        <Link href={'#'}> Overview </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 bg-[#01F0D0] font-bold rounded-full"> 
        <MdOutlineGroup className="text-[20px]"/> 
        <Link href={'#'}> Patients </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 hover:bg-[#01F0D0] font-bold rounded-full"> 
        <CiCalendar className="stroke-1 text-[20px]"/> 
        <Link href={'#'}> Schedule </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 hover:bg-[#01F0D0] font-bold rounded-full"> 
        <MdChatBubbleOutline className="text-[20px]"/> 
        <Link href={'#'}> Message </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-1 px-3 py-2 hover:bg-[#01F0D0] font-bold rounded-full"> 
        <TfiCreditCard className="text-[20px]"/> 
        <Link href={'#'}> Transaction </Link>
        </div>
        </div>

        <div className="flex flex-row items-center gap-2">
        <Image src={"/doctor.png"} alt="Doctor" width={44} height={44} />
        <div className="flex flex-col items-center justify-left"> 
          <h5 className="font-bold">Dr. Jose Simmons</h5>
          <p className="text-subfont">General Practitioner</p>
        </div>
        <div className="w-[0.5px] h-[40px] bg-gray-500 text-[#EDEDED]"></div>
        <div className="flex flex-row items-center justify-left gap-1"> 
        <FaGear className="text-[20px]"/>
        <MdMoreVert className="text-[18px]"/>        
        </div>

        </div>
      </div>
  );
};

export default NavBar;
