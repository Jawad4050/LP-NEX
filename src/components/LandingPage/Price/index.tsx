"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



const Price = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const monthlyPrice = "124.99€";
  const annualPrice = "1249.99€";

  const handlePricingToggle = (type: string) => {
    if (type === "monthly") {
      setIsMonthly(true);
    } else {
      setIsMonthly(false);
    }
  };

  return (
    <div className="">
      <div className="relative">
        <div className="lg:w-[65%] mx-auto lg:border-x border-[rgb(255,255,255,10%)] lg:py-[80px] py-[40px] lg:px-0 p-[20px]">
          <span className="block px-[16px] py-[10px] mx-auto text[15px] bg-[rgb(255,255,255,10%)] w-fit rounded-full">
            Pricing
          </span>
          <h4 className="lg:text-[46px] text-[36px] font-AeonikProMedium tracking-[-0.5px] lg:leading-[52.9px] text-white text-center mt-[24px]">Our Pricing</h4>
          <p className="text-[20px] text-[#686868] text-center mt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>
        <div className="absolute w-full lg:block hidden bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
      </div>
      <div>  
        <div className="relative">
          <div className="lg:w-[65%] w-full mx-auto">
            <div className="lg:flex items-center">
              <div className="w-full lg:mt-0 mt-[12px] lg:border-e border-[rgb(255,255,255,10%)] backdrop-blur-xl bg-[rgb(255,255,255,5%)] ">
                  <div className="px-[24px] pt-[24px]">
                    <h5 className="mb-[10px] text-white text-[20px]  font-AeonikProMedium font-[500] tracking-[-0.5px]">Expert</h5>
                    <p className="text-[#AEAFB3] text-[13px]">
                      Découvrez les performances de<br/>notre multitude de services.
                    </p>
                  </div>
                  <div className="p-[24px]">
                    <span className="text-[32px] text-[#ffffff] font-AeonikProMedium font-[500] tracking-[-0.5px]">
                    124.99€
                    </span>
                    <span className="text-[#C6C6C6] text-[13px]"> / mois</span>
                    <div className="mt-[24px]">
                      <ul>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          1 Compte Instagram
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          25'000 actions / jour
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mass vues de stories
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mass likes de stories
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Interactions avec les sondages
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Ciblage avec IA
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                          <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Rapports journaliers
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                          <span className='block bg-white w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Conseiller dédié sur whatsapp
                        </li>
                        <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                          <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                            <IoMdClose />
                          </span>
                          Follow / Unfollow
                        </li>
                        <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                          <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                            <IoMdClose />
                          </span>
                          Welcome DM
                        </li>
                      </ul>
                    </div>
                    <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center font-AeonikProMedium font-[500] tracking-[0px] text-center bg-[#F4EDFF] text-black">
                    Get Started for Free <FaAnglesRight className="ms-[6px]" />

                    </button>
                  </div>
              </div>
              <div className="w-full lg:mt-0 mt-[12px] backdrop-blur-xl bg-[rgb(255,255,255,5%)] ">
                  <div className="px-[24px] pt-[24px]">
                    <h5 className="mb-[10px] text-white text-[20px] font-AeonikProMedium font-[500] tracking-[-0.5px]">Expert</h5>
                    <p className="text-[#AEAFB3] text-[13px]">
                      Découvrez les performances de<br/>notre multitude de services.
                    </p>
                  </div>
                  <div className="p-[24px]">
                    <span className="text-[32px] text-[#ffffff] font-AeonikProMedium font-[500] tracking-[-0.5px]">
                    124.99€
                    </span>
                    <span className="text-[#C6C6C6] text-[13px]"> / mois</span>
                    <div className="mt-[24px]">
                      <ul>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          1 Compte Instagram
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          25'000 actions / jour
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mass vues de stories
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mass likes de stories
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Interactions avec les sondages
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                        <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Ciblage avec IA
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                          <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Rapports journaliers
                        </li>
                        <li className='text-[#ffffff] font-medium flex items-center mb-[14px] font-[500] text-[16px]'>
                          <span className='block bg-[#D2FF00] w-[16px] h-[16px] text-black text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Conseiller dédié sur whatsapp
                        </li>
                        <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                          <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                            <IoMdClose />
                          </span>
                          Follow / Unfollow
                        </li>
                        <li className='text-[#C6C6C6] font-medium flex items-center mb-[14px] font-[400] text-[16px]'>
                          <span className='block w-[16px] h-[16px] text-[#C6C6C6] text-[14px] flex items-center justify-center rounded-full me-2'>
                            <IoMdClose />
                          </span>
                          Welcome DM
                        </li>
                      </ul>
                    </div>
                    <button className="rounded-full w-full py-[12px] mt-[24px] flex items-center justify-center font-AeonikProMedium font-[500] tracking-[0px] text-center bg-[#D2FF00] text-black">
                    Get Started for Free <FaAnglesRight className="ms-[6px]" />

                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
        </div>
        <div className="relative mb-10">
          <div className="lg:w-[65%] w-full mx-auto">
              <div className="p-[24px] backdrop-blur-xl bg-[rgb(255,255,255,6%)]">
              <span className="text-[20px] block mb-[24px] text-white  font-AeonikProMedium font-[500] tracking-[-0.5px]">Consulting & Campaigns</span>
              <p className="text-[13px] text-white mb-[24px]">Découvrez les performances de notre multitude de services.</p>
              <div className="lg:flex">
                <div>
                  <div className="lg:flex items-center mt-[12px]">
                      <li className='text-white font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Offres multi comptes
                      </li>
                      <li className='text-white lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Stratégies virales
                      </li>
                      <li className='text-white lg:ms-2 font-medium flex items-center mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mediace : mass dm
                      </li>
                  </div>
                  <div className="lg:flex items-center">
                      <li className='text-white font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mediace : mother / slave
                      </li>
                      <li className='text-white lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Mediace : scraping
                      </li>
                      <li className='text-white lg:ms-2 font-medium flex items-center lg:mb-0 mb-[14px] font-[500] text-[13px]'>
                          <span className='block bg-black w-[16px] h-[16px] text-white text-[9px] flex items-center justify-center rounded-full me-2'>
                            <FaCheck />
                          </span>
                          Chatbot
                      </li>
                  </div>
                </div>
                <div className="mt-auto ms-auto">
                  <Link href="" className="bg-white text-black hover:bg-[#242429]  font-AeonikProMedium font-[500] tracking-[-0.5px] lg:w-fit w-full text-center justify-center flex items-center rounded-full px-[18px] py-[12.5px]">Book a Call<FaAnglesRight className="ms-[6px]" />
                  </Link>
                </div>
              </div>
              </div>
          </div>
          <div className="absolute w-full bottom-0 left-0 h-[1px] bg-[rgb(255,255,255,10%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Price;
