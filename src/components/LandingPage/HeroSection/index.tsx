import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const HeroHeader = () => {
    return (
      <div>
        <div className="relative ">
          <div className="lg:py-[47px] py-[20px] lg:text-center mx-auto border-x border-[#CFE3F4] lg:w-[65%] bg-[url('/bg-herosection.svg')] bg-cover bg-center">
            <h1 className="lg:text-[66px] font-AeonikProMedium text-[36px] text-center flex justify-center items-center mb-0 text-[#1F2632]">Obtenez 15x plus de<br/>vrais abonnés Instagram</h1>
            <p className="text-[18px] font-[300] mt-[16px] text-[#444D5D] text-center">Sed ut perspiciatis <span className="text-[#444D5D]">unde omnis iste</span> natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
            <Link href="" className="text-[16px] rounded-full bg-[#1F2632] text-white block w-fit mx-auto mt-4 px-[20px] py-[10px] hover:bg-[#FFF2F2] rounded-full flex items-center justify-center" ><Image alt="" src="/electric-icon.svg" width={13} height={15} className="me-[8px]" />Get Started</Link>
            <div className="mx-auto flex items-center justify-center lg:my-[35px] mt-[20px]">
              <div className='flex items-center'>
                <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover' />
                <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar-2.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
              </div>
              <div className="ms-4">
                <div className="flex items-center gap-1 mb-1">
                  <IoStar className="text-[#1F2632]" />
                  <IoStar className="text-[#1F2632]" />
                  <IoStar className="text-[#1F2632]" />
                  <IoStar className="text-[#1F2632]" />
                  <IoStar className="text-[#1F2632]" />
                </div>
                <span className='text-[16px] text-[#444D5D] block text-start'>+25’000 users</span>
              </div>
            </div>
          </div>
          <div className="absolute lg:block hidden w-full bottom-0 left-0 h-[1px] bg-[#1d1c1f] bg-[#CFE3F4]"></div>
        </div>
        <div className="relative ">
          <div className="bg-transparent lg:w-[65%] mx-auto p-[24px] border-x border-[#CFE3F4] relative">
            <div className="lg:h-[450px] h-[250px] w-full rounded-[24px] bg-white border-[8px] border-[#CFE3F4]"></div>
            <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-8px] z-10 left-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
            <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-8px] z-10 right-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
            <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 left-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
            <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 right-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
          </div>
          <div className="absolute lg:block hidden w-full bottom-0 left-0 h-[1px] bg-[#1d1c1f] bg-[#CFE3F4]"></div>
        </div>
        <div className="relative ">
          <div className="lg:w-[65%] flex items-center mx-auto border-x border-[#CFE3F4]">
            <div className="w-full py-[24px] text-center  relative">
              <Image alt="" src="/header-logo.svg" width={135} height={30} className="mx-auto" />
              <p className="text-[16px] text-[#444D5D] my-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut labore</p>
              <div className="flex items-center justify-center">
                <div>
                  <Image alt="" src="/Avatar.svg" width={40} height={40} className="w-[40px] h-[40px] rounded-full object-fit" />
                </div>
                <div className="ms-[8px]">
                  <span className="block text-[16px] text-[#444D5D] text-start">FOUNDER NAME</span>
                  <span className="block text-[16px] text-[#444D5D] text-start">POSITION</span>
                </div>
              </div>

              <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 left-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
              <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 right-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
            </div>
          </div>
          <div className="absolute lg:block hidden w-full bottom-0 left-0 h-[1px] bg-[#CFE3F4]"></div>
        </div>
      </div>
    );
  };
  
  export default HeroHeader;