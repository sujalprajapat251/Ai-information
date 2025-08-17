import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi';
import acc from '../../Asset/About/about_acc.webp'
import lama from '../../Asset/Career/lama.jpg'
import quest from '../../Asset/Career/quest.jpg'
import glass from '../../Asset/Career/glasses.webp'
import ar from '../../Asset/Career/ar.avif'
import ai from '../../Asset/Career/ai.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const CareerAcc = () => {

const accordionData = [
    {
      title: "Llama",
      content:
        "We’ve integrated our state-of-the-art open source language model with Meta AI, our intelligent assistant, for enhanced scalability and performance. Meta Llama significantly elevates various capabilities, such as code generation, reasoning and content translation.",
    },
    {
      title: "Meta Quest",
      content:
        "Our Meta Quest headsets take virtual reality beyond entertainment, driving breakthroughs in education, travel and other significant areas. Their groundbreaking technologies drive research and development in areas such as computer vision, advanced optics and virtual reality.",
    },
    {
      title: "Ray-Ban Meta glasses",
      content:
        "Our next-generation Ray-Ban Meta glasses let you interact with AI wherever you go — hands-free. Take photos and videos, listen to music, chat with friends, even livestream on social media. They’re comfortable and stylish, with exceptional visual and sound quality.",
    },
    {
      title: "AR wearables",
      content:
        "Our first AR glasses prototype — something we’ve been working on for nearly a decade — has arrived. Wireless, with a wide FOV display and weighing less than 100 grams, these were exciting to unveil at Meta Connect 2024. Our continued testing will help us improve upon consumer AR glasses in the coming years.",
    },
    {
        title: "AI Studio",
        content:
          "This versatile tool lets individuals and businesses without coding experience build customized AI-generated chatbots for platforms like Messenger, Instagram and Facebook. It’s a scalable way to leverage AI for interactive, impactful results.",
    },
  ];

const [openIndexes, setOpenIndexes] = useState([0]);
const [manageId, setManageId] = useState(0)

const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes([]); // close all if clicked again
      setManageId(0);
    } else {
      setOpenIndexes([index]); // only open clicked one
      setManageId(index);
    }
    setManageId(index ? index : 0)
  };


useEffect(() => {
  AOS.init({
    duration: 1000,  // animation duration
    once: false,     // animate every time you scroll into view
    mirror: true,    // animate again when scrolling back up
  });
  const handleScroll = () => {
    AOS.refresh();
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);  
  
  return (
    <>
    <section className='bg-black'>
        <div className=''>
            <div className='container mx-auto py-12 sm:!px-6 !px-4'>
               <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="3000">
                   <div className="3xl:w-1/3 lg:w-1/2  text-white">
                      <h3 className="text-center text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sm:leading-[48px] sx:leading-[28px] leading-[28px] mt-4">We build awesome things</h3> 
                      <p className='text-center mt-4 sm:text-[16px] text-[14px]'>We do more than make great technologies — we create awe and inspiration. AI is influencing the metaverse in mind-blowing ways and we’re staying a step ahead. From our Llama collection of open-source large language models to immersive virtual reality headsets and Ray-Ban Meta glasses, we’re making our vast world feel smaller and more connected.</p>
                   </div>
               </div>
              <div className="flex justify-center pt-12">
                     <div className="2xl:w-4/5 w-full">
                       <div className="flex lg:flex-nowrap gap-8 flex-wrap">
                         <div className="lg:w-1/2 w-full">
                           <div>
                             <div className="border-t border-[#7e7d7d]"></div>
                             {accordionData.map((item, index) => {
                               const isOpen = openIndexes.includes(index);
                               return (
                                 <div key={index} data-aos="fade-right" data-aos-duration="3000">
                                   {/* Header */}
                                   <button onClick={() => toggle(index)} className="flex w-full my-8 justify-between text-white sm:text-[20px] text-[18px] items-center text-left font-semibold text-lg focus:outline-none">
                                     {item.title}
                                     {isOpen ? (
                                       <BiMinus className="w-5 h-5 border-[1px] rounded-full text-white" />
                                     ) : (
                                       <BiPlus className="w-5 h-5 border-[1px] rounded-full text-white" />
                                     )}
                                   </button>
               
                                   {/* Content with transition */}
                                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${ isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                      <p className="mt-2 text-white mb-7">{item.content}</p>
                                   </div>
                                   <div className="border-t border-[#7e7d7d]"></div>
                                 </div>
                               );
                             })}
                           </div>
                         </div>
                         <div className="relative lg:w-1/2 w-full" data-aos="fade-left" data-aos-duration="3000">
                           {[lama, quest, glass, ar, ai].map((src, index) => (
                             <img
                               key={index}
                               src={src}
                               alt=""
                               className={` w-full object-cover cursor-pointer transition-all duration-700 ease-in-out  grayscale-0 hover:grayscale
                               ${openIndexes[0] === index || manageId === index ? 'opacity-100 lg:h-[700px] sm:h-[700px] sx:h-[450px] h-[300px]' : 'opacity-0 pointer-events-none h-0'}`}
                             />
                           ))}
                        </div>

                       </div>
                     </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section className='bg-black'>
       <div>
          
       </div>
    </section> */}
    </>
  )
}

export default CareerAcc
