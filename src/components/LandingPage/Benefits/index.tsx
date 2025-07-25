import Image from "next/image";
import Link from "next/link";

const Benefits = () => {
    return (
        
        <div className="relative">
            <div className="lg:w-[65%] mx-auto lg:mt-[80px] mt-[20px] lg:px-0 px-[20px]">
                <div className="block px-[12px] py-[6px] mx-auto font-[600] text-[14px] bg-transparent border border-[#F0F3F7] text-[#444D5D] bg-white w-fit rounded-full overflow-hidden shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_3%)]">Benefits</div>
                <h4 className="text-[46px] font-AeonikProMedium tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">Setup and Track<br/>Instagram Growth</h4>
                <p className="text-[#999999] text-[18px] mb-0 text-center mb-[24px]">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                <Link href="" className="text-[16px] rounded-full bg-[#1F2632] mb-[40px] text-white block w-fit mx-auto px-[20px] py-[10px] hover:bg-[#FFF2F2] rounded-full flex items-center justify-center" ><Image alt="" src="/electric-icon.svg" width={13} height={15} className="me-[8px]" />Get Started</Link>
            </div>
            <div className="relative">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex items-center ">
                        <div className="w-full p-[24px] text-center lg:border-x border-[rgb(14,63,126,6%)]">
                            <Image alt="" src="/benefits/img-1.svg" width={450} height={450} className="w-full mb-0" />
                            <div>
                                <h5 className="text-[#1F2632] font-AeonikProMedium  text-[18px] mt-[4px] mb-0">Ciblez des comptes</h5>
                                <p className="text-[16px] text-[#444D5D] mt-[8px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="w-full p-[24px] text-center lg:border-r border-[rgb(14,63,126,6%)]">
                            <Image alt="" src="/benefits/img-2.svg" width={450} height={450} className="w-full mb-0" />
                            <div>
                                <h5 className="text-[#1F2632] text-[18px] font-AeonikProMedium  mt-[4px] mb-0">Setup des Actions</h5>
                                <p className="text-[16px] text-[#444D5D] mt-[8px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full lg:block hidden bottom-0 left-0 h-[1px] bg-[rgb(14,63,126,6%)]"></div>
                </div>
            </div>
            <div className="relative">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex items-center relative">
                        <div className="w-full p-[24px] text-center lg:border-x border-[rgb(14,63,126,6%)]">
                            <Image alt="" src="/benefits/img-3.svg" width={450} height={450} className="w-full mb-0" />
                            <div>
                                <h5 className="text-[#1F2632] font-AeonikProMedium  text-[18px] mt-[4px] mb-0">Toutes vos Statistiques</h5>
                                <p className="text-[16px] text-[#444D5D] mt-[8px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="w-full p-[24px] text-center lg:border-r border-[rgb(14,63,126,6%)]">
                            <Image alt="" src="/benefits/img-4.svg" width={450} height={450} className="w-full mb-0" />
                            <div>
                                <h5 className="text-[#1F2632] font-AeonikProMedium  text-[18px] mt-[4px] mb-0">Progression en Live</h5>
                                <p className="text-[16px] text-[#444D5D] mt-[8px]">Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-7px] z-10 left-[-7px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-7px] z-10 right-[-7px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-7px] z-10 left-[-7px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-7px] z-10 right-[-7px] bg-white rounded-full border border-[#F2F3F7]"></span>
                    </div>
                </div>
                <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[rgb(14,63,126,6%)]"></div>
            </div>
        </div>
    );
};

export default Benefits;