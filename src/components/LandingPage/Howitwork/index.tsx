import Image from "next/image";
import Link from "next/link";

const HowItWork = () => {
    return (
        <div>
            <div className="lg:w-[65%] mx-auto lg:mt-[80px] mt-[40px] lg:px-0 px-[20px]">
                <div className="block px-[12px] py-[6px] mx-auto font-[600] text-[14px] bg-transparent border border-[#F0F3F7] text-[#444D5D] bg-white w-fit rounded-full overflow-hidden shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_3%)]">How it Works</div>
                <h4 className="lg:text-[46px] text-[36px] font-AeonikProMedium  tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">Simple steps to scale</h4>
                <p className="text-[#999999] text-[18px] mb-0 text-center mb-[24px]">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                <Link href="" className="text-[16px] rounded-full bg-[#1F2632] mb-[40px] text-white block w-fit mx-auto px-[20px] py-[10px] hover:bg-[#FFF2F2] rounded-full flex items-center justify-center" ><Image alt="" src="/electric-icon.svg" width={13} height={15} className="me-[8px]" />Get Started</Link>
            </div>
            <div className="relative">
                <div className="lg:w-[65%] mx-auto ">
                    <div className="relative px-[24px] pb-[24px] lg:border-x border-[rgb(14,63,126,6%)]">
                        <div className="bg-white border border-[#F2F2F2] rounded-[16px] p-[28px]">
                            <div className="flex items-center">
                                <span className="text-[#7A7A7A]">ACCOUNT GROWTH - FOLLOWERS</span>
                            </div>
                            <div className="flex items-center mt-[30px]">
                                <div><span className="text-[#242424] text-[48px] font-AeonikProMedium ">152,4K</span></div>
                                <div className="py-[2px] px-[4px] bg-[#E0F0E4] rounded-[4px] ms-[5px]"><span className="text-[12px] block text-[#377E36]">+15%</span></div>
                            </div>
                            <div className="flex items-center gap-[10px] mt-[19px] mb-[36px]">
                                <hr className="w-[25%] h-[6px] bg-[#0090FF]"/>
                                <hr className="w-[50%] h-[6px] bg-[#30A5FF]"/>
                                <hr className="w-[25%] h-[6px] bg-[#0062AE]"/>
                            </div>
                            <div className="overflow-hidden">
                                <div className="flex items-center gap-[13px] lg:overflow-hidden overflow-auto lg:w-full w-[600px]">
                                    <div className="w-full bg-white border border-[#F2F2F2] rounded-[8px] p-[12px]">
                                        <div className="flex items-center">
                                            <span className="block bg-[#0090FF] h-[6px] w-[6px] rounded-full"></span>
                                            <span className="block text-[#7A7A7A] text-[14px] ms-[5px]">LIKES</span>
                                        </div>
                                        <div className="mt-[9px] flex items-center">
                                            <div><span className="text-[#242424] text-[24px] font-AeonikProMedium ">2,3K</span></div>
                                            <div className="py-[2px] px-[4px] bg-[#E0F0E4] rounded-[4px] ms-[10px]"><span className="text-[12px] block text-[#377E36]">+15%</span></div> 
                                        </div>
                                    </div>
                                    <div className="w-full bg-white border border-[#F2F2F2] rounded-[8px] p-[12px]">
                                        <div className="flex items-center">
                                            <span className="block bg-[#30A5FF] h-[6px] w-[6px] rounded-full"></span>
                                            <span className="block text-[#7A7A7A] text-[14px] ms-[5px]">STORY VIEWS</span>
                                        </div>
                                        <div className="mt-[9px] flex items-center">
                                            <div><span className="text-[#242424] text-[24px] font-AeonikProMedium ">2,3K</span></div>
                                            <div className="py-[2px] px-[4px] bg-[#E0F0E4] rounded-[4px] ms-[10px]"><span className="text-[12px] block text-[#377E36]">+15%</span></div> 
                                        </div>
                                    </div>
                                    <div className="w-full bg-white border border-[#F2F2F2] rounded-[8px] p-[12px]">
                                        <div className="flex items-center">
                                            <span className="block bg-[#0062AE] h-[6px] w-[6px] rounded-full"></span>
                                            <span className="block text-[#7A7A7A] text-[14px] ms-[5px]">ENGAGEMENT</span>
                                        </div>
                                        <div className="mt-[9px] flex items-center">
                                            <div><span className="text-[#242424] text-[24px] font-AeonikProMedium ">2,3K</span></div>
                                            <div className="py-[2px] px-[4px] bg-[#E0F0E4] rounded-[4px] ms-[10px]"><span className="text-[12px] block text-[#377E36]">+15%</span></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute lg:block hidden w-full bottom-0 left-0 h-[1px] bg-[rgb(14,63,126,6%)]"></div>
            </div>
            <div className="relative mb-10">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex items-center relative">
                        <div className="text-center p-[48px] w-full lg:border-s border-[rgb(14,63,126,6%)]">
                            <div className="w-[45px] mx-auto h-[45px] rounded-[6px] border border-[#F0F3F7] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_9%)] flex items-center justify-center">
                                <Image alt="" src="/how-it-work/icons/img-1.svg" width={24} height={24} />
                            </div>
                            <h5 className="text-[#1F2632] my-[8px] mt-[12px] font-AeonikProMedium ">Connect Account</h5>
                            <p className="text-[#444D5D]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/>eiusmod tempor</p>
                        </div>
                        <div className="text-center p-[48px] w-full lg:border-x border-[rgb(14,63,126,6%)]">
                            <div className="w-[45px] mx-auto h-[45px] rounded-[6px] border border-[#F0F3F7] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_9%)] flex items-center justify-center">
                                <Image alt="" src="/how-it-work/icons/img-2.svg" width={24} height={24} />
                            </div>
                            <h5 className="text-[#1F2632] my-[8px] mt-[12px] font-AeonikProMedium ">Pick Targets</h5>
                            <p className="text-[#444D5D]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/>eiusmod tempor</p>
                        </div>
                        <div className="text-center p-[48px] w-full lg:border-e border-[rgb(14,63,126,6%)]">
                            <div className="w-[45px] mx-auto h-[45px] rounded-[6px] border border-[#F0F3F7] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_9%)] flex items-center justify-center">
                                <Image alt="" src="/how-it-work/icons/img-3.svg" width={24} height={24} />
                            </div>
                            <h5 className="text-[#1F2632] my-[8px] mt-[12px] font-AeonikProMedium ">Grow your Account</h5>
                            <p className="text-[#444D5D]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/>eiusmod tempor</p>
                        </div>

                        <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-8px] z-10 left-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] top-[-8px] z-10 right-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 left-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
                        <span className="lg:block hidden absolute w-[14px] h-[14px] bottom-[-8px] z-10 right-[-8px] bg-white rounded-full border border-[#F2F3F7]"></span>
                    </div>
                </div>
                <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[rgb(14,63,126,6%)]"></div>
            </div>
        </div>
    );
};

export default HowItWork;