import Image from "next/image";
import Link from "next/link";
import { BiSolidZap } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

const CallToAction = () => {
    return (
        <div className="lg:w-[65%] w-[85%] mx-auto lg:top-[-80px] top-0 relative">
            <div className="lg:rounded-[24px] rounded-[0px_0px_24px_24px] bg-[#30A5FF] lg:p-[73px] p-[30px] overflow-hidden">
                <h3 className="text-[46px] mb-0 text-[#ffffff] font-AeonikProMedium text-center">Call to Action</h3>
                <p className="text-[16px] text-white text-center mt-[24px] mb-[24px] lg:w-[40%] w-full mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                <div className="mx-auto flex items-center justify-center mb-[35px]">
                    <div className='flex items-center'>
                    <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover' />
                    <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                    <Image src="../Avatar-2.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                    <Image src="../Avatar.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                    <Image src="../Avatar-1.svg" alt='' width={40} height={40} className='w-[40px] h-[40px] rounded-full object-cover ms-[-12px]' />
                    </div>
                    <div className="ms-4">
                    <div className="flex items-center gap-1 mb-1">
                        <IoStar className="text-white" />
                        <IoStar className="text-white" />
                        <IoStar className="text-white" />
                        <IoStar className="text-white" />
                        <IoStar className="text-white" />
                    </div>
                    <span className='text-[16px] text-white block text-start'>+25’000 users</span>
                    </div>
                </div>
                <Link href="" className="text-[16px] rounded-full bg-white text-black block w-fit mx-auto px-[20px] py-[10px] hover:bg-[#FFF2F2] rounded-full" >Get Started</Link>
            </div>
        </div>
    );
};

export default CallToAction;