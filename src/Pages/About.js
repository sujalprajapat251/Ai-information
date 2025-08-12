import React from 'react'
import Hyperspeed from '../Animation/HyperSpeed'
import img1 from '../Asset/About/about_bg.webp'
import img2 from '../Asset/About/about-bg2.webp'
import img3 from '../Asset/About/about_bg3.webp'
import { FaArrowRight } from 'react-icons/fa'
import AboutCard from '../Animation/AboutCard'

const About = () => {
  return (
    <div>
      <section className="relative bg-themeblack overflow-hidden h-[220px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
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
                background: 0x000000,
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
          <h2 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[48px] sx:leading-[35px] leading-[28px]">
            Build AI responsibly to benefit humanity
          </h2>
        </div>
      </section>

      <section className='bg-[#121212] sm:pt-[70px] pt-[50px] pb-[50px]'>
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
    </div>
  )
}

export default About
