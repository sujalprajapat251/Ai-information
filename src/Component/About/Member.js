import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import team from '../../Asset/About/about_group.jpg'


const Member = () => {

const [hovered, setHovered] = useState(false);

useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,     
      mirror: true,    
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
    <section className='bg-black overflow-hidden'>
         <div className='sm:pt-10 pt-5'>
              <div className='container mx-auto'>
                 <div className='flex lg:flex-nowrap flex-wrap rounded-[30px] overflow-hidden 2xl:mx-10 mx-5'>
                   <div className="lg:w-1/2 w-full relative overflow-hidden" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${   hovered ? "opacity-100" : "opacity-0" }`}>
                         <img src={team} alt="Team Merged" className="w-full h-full object-cover"/>
                      </div>
                      <div className={`transition-opacity duration-700 ease-in-out ${ hovered ? "opacity-0" : "opacity-100" }`}>
                         <JigsawPuzzle imageSrc={team} rows={3} columns={3} onSolved={() => alert("Puzzle solved!")} className="h-full object-cover"/>
                      </div>
                   </div>
                     <div className='lg:w-1/2 w-full bg-[#222222]'>
                         <div className='sm:p-[65px] sx:p-[40px] p-[20px] text-white'>
                            <p data-aos="fade-left">Mentorship programs</p>
                            <h3 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sx:leading-[46px] leading-[28px] mt-4" data-aos="fade-left" >Get hands-on experience in AI <br /> research</h3>
                            <p className='sm:text-[16px] text-[14px] mt-10 sm:pt-4' data-aos="fade-left" >We’re passionate about introducing people to the extraordinary world of AI. Our AI Mentorship (AIM) and EMEA programs let PhD candidates conduct open science research in collaboration with their university, academic advisor, and AI at Meta mentor participants as full-time AI at Meta employees.</p>
                            <p className='sm:text-[16px] text-[14px] mt-5' data-aos="fade-left" >We currently have agreements in place with prestigious universities in the United States, France, Israel and the United Kingdom.</p>
                            <p className='mt-10 sm:pt-4 sm:text-[18px] text-[16px] font-[600]' data-aos="fade-left" >For more about these programs, reach out to us at MetaAIM@meta.com</p>
                         </div>
                     </div>
                 </div>
              </div>
         </div>
      </section>
  )
}

export default Member
