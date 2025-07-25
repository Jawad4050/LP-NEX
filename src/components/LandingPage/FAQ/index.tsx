"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers: FAQItem[] = [
    {
      question: "Question 1",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 2",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 3",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 4",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
  ];

  return (
    <div className="lg:w-[65%] mx-auto py-[80px] lg:px-0 px-[20px] lg:block hidden">
    <div className="block px-[12px] py-[6px] lg:mx-auto font-[600] text-[14px] bg-transparent border border-[#F0F3F7] text-[#444D5D] bg-white w-fit rounded-full overflow-hidden shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_3%)]">FAQ</div>
    <h4 className="text-[46px] font-AeonikProMedium tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] lg:text-center my-[24px]">Your Questions</h4>
    <p className="text-[#999999] text-[18px] mb-0 text-center mb-[24px]">Sed ut perspiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudantium</p>
      <div>
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="bg-white text-[#020816] rounded-[16px] border border-[#E4E9EF] shadow-[0px_16px_16px_-8px_rgba(42,_51,_70,_12%)] mb-[8px] px-[24px] py-[18px] text-[15.25px]">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
              <span className="block font-[400]">{item.question}</span>
              <span className="block text-[20px]">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
