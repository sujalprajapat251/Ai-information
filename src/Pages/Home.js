import React from 'react'
import Introduction from '../Component/Home/Introduction'
import AiandHowitsWork from '../Component/Home/AiandHowitsWork'
import SpecialAddress from '../Component/Home/SpecialAddress'
import team from '.././Asset/About/about_group.jpg'
import Stories from '../Component/Home/Stories'
import Member from '.././Component/About/Member'
import CountSection from '../Component/Home/CountSection'
import hello from '../Asset/About/about_industri.jpg'

const Home = () => {
  return (
    <div className=''>
      <Introduction />
      <AiandHowitsWork />
      {/* <SpecialAddress /> */}
      <div className='flex justify-center mt-11 sm:pt-11'>
        <div className='2xl:w-4/5 w-full'>
          <div className="flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap items-center">
            <div className="lg:w-1/2 w-full px-5 lg:mt-0 mt-8">
              <div data-aos="fade-right" >
                <img src={hello} alt="" className='sm:h-[500px] sx:h-[400px] h-[300px] w-full object-cover cursor-pointer transition-all duration-500 ease-in-out grayscale-0 hover:grayscale' />
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
      <Stories />
      <Member />
      <CountSection />
    </div>
  )
}

export default Home
