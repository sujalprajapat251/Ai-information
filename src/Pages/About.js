import React, { useEffect, useRef, useState } from 'react'
import Hyperspeed from '../Animation/HyperSpeed'
import img1 from '../Asset/About/about_bg.webp'
import img2 from '../Asset/About/about-bg2.webp'
import img3 from '../Asset/About/about_bg3.webp'
import { FaArrowRight } from 'react-icons/fa'
import AboutCard from '../Animation/AboutCard'
import team from '../Asset/About/about_group.jpg'
import { BiMinus, BiPlus } from 'react-icons/bi'
import acc from '../Asset/About/about_acc.webp'
import hello from '../Asset/About/about_industri.jpg'
import AboutSqure from '../Animation/AboutSqure'
import Threads from '../Animation/AboutSqure'
import TextType from '../Animation/TextType'
import { JigsawPuzzle } from 'react-jigsaw-puzzle'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import Demo from '../Animation/Demo'
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";


const About = () => {

  const [key, setKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(k => k + 1); 
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const accordionData = [
    {
      title: "Openness",
      content:
        "We believe the latest advancements in AI should be published and shared for the community to learn from and build upon.",
    },
    {
      title: "Collaboration",
      content:
        "We collaborate openly with both internal and external partners to share knowledge and cultivate diverse perspectives and needs.",
    },
    {
      title: "Excellence",
      content:
        "There’s no shortage of new possibilities to explore in AI. While our researchers focus on what they believe will have the most positive impact on people and society, our engineers are working to deliver meaningful advancements in products and experiences for all people.",
    },
    {
      title: "Scale",
      content:
        "To bring the benefits of AI to more people and improve accessibility, our research must account for both large scale data and computational needs.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState(
    accordionData.map((_, i) => i)
  );

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); 
    } else {
      setOpenIndexes([...openIndexes, index]); 
    }
  };


  return (
    <div className='overflow-hidden'> 
      <section className="relative bg-black overflow-hidden h-[220px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
        {/* Background Hyperspeed */}
        <div className="absolute inset-0 z-0">
            <Hyperspeed
              className="w-full h-full"
              effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: 'turbulentDistortion',
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x141414,
                islandColor: 0x141414,
                background: 0x060606,
                shoulderLines: 0xFFFFFF,
                brokenLines: 0xFFFFFF,
                leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                sticks: 0x03B3C3,
              }
            }}
          />

        </div>

      

        {/* Foreground text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="uppercase text-[#9aa0a6] text-[12px] sm:text-[14px] md:text-[16px] sm:mb-6 mb-3">
            Our mission
          </p>
          <TextType
            text={[
              "Build AI responsibly to benefit humanity",
              "Create ethical AI that benefits all humanity.",
            ]}
            typingSpeed={75}
            pauseDuration={1000}
            showCursor={true}
            className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] sx:leading-[35px] leading-[28px]"
            loop={true}
          />


        </div>
      </section>

      <section className='bg-black sm:pt-[70px] pt-[50px] pb-[50px] overflow-hidden'>
          <div className='container mx-auto'>
              <div className='text-center'>
                <h2 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[42px] sx:leading-[35px] leading-[28px]">
                   Explore our research
                </h2>
                <p className=" text-[#9aa0a6] text-[12px] sm:text-[14px] md:text-[16px] mt-4">
                    We work on some of the most complex and interesting challenges in AI.
                </p>
              </div>

              <AboutCard/>
          </div>
      </section>

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

      <section className='bg-black overflow-hidden'>
          <div className='sm:pt-[70px] pt-[40px]'>
              <div className="container mx-auto">
                 <div className='text-white text-center'>
                    <p>People and culture</p>
                    <h3 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sm:leading-[48px] sx:leading-[28px] leading-[28px] mt-4">The freedom to explore, <br /> discover and apply AI at scale</h3>
                    <p className='sm:text-[20px] text-[18px] sm:mt-11 mt-5'>At Meta, we work across a set of key principles:</p>
                 </div>
                  <div className="flex justify-center mt-5">
                     <div className="2xl:w-4/5 w-full">
                       <div className="flex lg:flex-nowrap flex-wrap">
                         <div className="lg:w-1/2 w-full mt-8 lg:px-5 px-5">
                           <div>
                             <div className="border-t border-[#7e7d7d]"></div>
                             {accordionData.map((item, index) => {
                               const isOpen = openIndexes.includes(index);
                               return (
                                 <div key={index} data-aos="fade-right">
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
                         <div className="lg:w-1/2 w-full mt-8 lg:px-7 px-5" data-aos="fade-left" >
                           <img  src={acc} alt=""  className="lg:h-[800px] sm:h-[700px] sx:h-[450px] h-[300px] w-full object-cover cursor-pointer transition-all duration-500 ease-in-out grayscale-0 hover:grayscale "/>
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className='flex justify-center mt-11 sm:pt-11'>
                      <div className='2xl:w-4/5 w-full'>
                         <div className="flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap items-center">
                             <div className="lg:w-1/2 w-full px-5 lg:mt-0 mt-8">
                                 <div data-aos="fade-right" >
                                    <img src={hello}  alt="" className='sm:h-[500px] sx:h-[400px] h-[300px] w-full object-cover cursor-pointer transition-all duration-500 ease-in-out grayscale-0 hover:grayscale' />
                                 </div>
                             </div>
                             <div className="lg:w-1/2 w-full lg:px-[50px] px-5">
                                <div className='text-white'>
                                    <h3 className='text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sm:leading-[48px] sx:leading-[28px] mt-4' data-aos="fade-left">Sharing our progress at industry events</h3>
                                    <p className='mt-5' data-aos="fade-left">Throughout the year, we connect with the AI community through a variety of virtual, in-person and hybrid industry and academic events — as a participating sponsor or as host. At these events, our engineers and researchers share our latest product developments, research breakthroughs and publications.</p>
                                </div>
                             </div>
                         </div>
                      </div>
                  </div>
               </div>
          </div>
      </section>

      <section className='bg-black pt-[90px] overflow-hidden' >
         <div className="relative  overflow-hidden py-[100px] ">
           <div className="absolute inset-0 z-0">
             <AboutSqure
               dotSize={10}
               gap={15}
               baseColor="#2e2e2e"
               activeColor="#a2d2ff"
               proximity={120}
               shockRadius={250}
               shockStrength={5}
               resistance={750}
               returnDuration={1.5}
             />
           </div>
   
          <div className="relative z-10  px-5">
            <div className="text-center text-white">
              <h3 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sx:leading-[48px] leading-[28px] " data-aos="zoom-in">
                Want to stay updated on all <br /> things AI at Meta?
              </h3>
              <p className="mt-6 sm:text-[16px] text-[14px]" data-aos="zoom-in">
                Sign up to receive our newsletter and be the first to know about AI at Meta news, events, research breakthroughs, and more.
              </p>
            </div>
          </div>
   
         </div>
      </section>

    </div>
  )
}

export default About
