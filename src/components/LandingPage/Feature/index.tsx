import Image from "next/image";
const Feature = () => {
    return (
        
        <div>
            <div className="lg:w-[65%] mx-auto lg:border-x border-[rgb(255,255,255,10%)] lg:px-0 px-[20px] lg:py-[0px] py-[40px] lg:pt-[80px] pt-[20px">
                <span className="block px-[16px] py-[10px] mx-auto  text[15px] bg-[rgb(255,255,255,10%)] w-fit rounded-full">Features</span>
                <h4 className="lg:text-[46px] text-[36px]  font-AeonikProMedium tracking-[-0.5px] lg:leading-[52.9px] text-center my-[24px] text-white">All of our Features</h4>
                <p className="text-[20px] text-[#8B8B8B] text-center font-[500]">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div className="relative">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex gap-[8px]">
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-s border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="../features/img-1.svg" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">Story Views</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-x border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="../features/img-2.svg" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">Story Likes</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div> 
                <div className="absolute lg:block hidden w-full bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
            </div>   
            <div className="relative">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex gap-[8px]">
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-s border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="/features/img-3.png" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">Story Reactions</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-x border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="../features/img-4.svg" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">Story Polls</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full lg:block hidden bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
            </div>
            <div className="relative">
                <div className="lg:w-[65%] mx-auto">
                    <div className="lg:flex gap-[8px]">
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-s border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="../features/img-5.svg" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">DM Flows</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="w-full lg:mb-0 p-[24px] text-center lg:border-x border-[rgb(255,255,255,10%)]">
                            <Image alt="" src="../features/img-6.svg" width={433} height={187} className="w-full"/>
                            <h5 className="mb-[8px] text-white text-[18px] font-AeonikProMedium ">Follow / Unfollow</h5>
                            <p className="mb-0 text-[18px] text-[#AEAFB3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full lg:block hidden bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
            </div>
        </div>
    );
};

export default Feature;