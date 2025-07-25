import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  return (
    
    <div>
        <div className='lg:w-[65%] px-6 pb-5 mx-auto lg:px-8 pt-20'>
            <div className="max-w-3xl mx-auto text-center">
                    <div className="block px-[12px] py-[6px] mx-auto font-[600] text-[14px] bg-transparent border border-[#F0F3F7] text-[#444D5D] bg-white w-fit rounded-full overflow-hidden shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_3%)]">Testimonials</div>
                    <h4 className="lg:text-[46px] text-[36px] font-AeonikProMedium tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">Our clients love us</h4>
                    <p className="text-[#999999] text-[18px] mb-0 text-center mb-[24px]">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
                    <Link href="" className="text-[16px] rounded-full bg-[#1F2632] mb-[40px] text-white block w-fit mx-auto px-[20px] py-[10px] hover:bg-[#FFF2F2] rounded-full flex items-center justify-center" ><Image alt="" src="/electric-icon.svg" width={13} height={15} className="me-[8px]" />Get Started</Link>
                        
            </div>
        </div>
        <div>
            <div className="section-gradient-1 relative lg:-mx-4 mt-2 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-2 overflow-hidden px-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-5">
                <div className="animate-marquee space-y-2 py-4 marquee-duration-1">
                    {/* Review 1 */}
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_3%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-bold-GilroySemiBold ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="animate-marquee space-y-2 py-4 marquee-duration-2">
                    {/* Review 2 */}
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="animate-marquee space-y-2 py-4 marquee-duration-3">
                    {/* Review 1 */}
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="animate-marquee space-y-2 py-4 marquee-duration-2">
                    {/* Review 2 */}
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="animate-marquee space-y-2 py-4 marquee-duration-3">
                    {/* Review 1 */}
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="">
                        <div className="border border-[#EEF1F4] rounded-[16px] lg:mb-0 mb-[20px] w-full px-[31px] py-[24px] shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_8%)]">
                            <div className="flex items-center gap-[1px] mb-1 text-[16px]">
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                                <IoStar className="text-[#30A5FF]" />
                            </div>
                            <span className="block text-[24px] my-[16px] text-black font-AeonikProMedium ">+9’000 Followers</span>
                            <p className="text-[#999999] text-[18px] mb-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className="flex">
                                <div>
                                    <Image
                                        src="Avatar.svg"
                                        alt="Profile Image"
                                        width={54}
                                        height={54}
                                        className="rounded-full w-[54px] h-[54px] bg-[#D9D9D9]"
                                    />
                                </div>
                                <div className="ms-[8px]">
                                    <span className="text-[18px] block text-black font-AeonikProMedium">Benjamin B.</span>
                                    <span className="text-[18px] block text-[#999999]">CEO @ Courchevel</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
                <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-gray-50"></div>
                <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-gray-50"></div>
            </div>
        </div>
    </div>
  )
}


export default Testimonials;