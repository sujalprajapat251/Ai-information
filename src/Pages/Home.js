import React from 'react'
import Introduction from '../Component/Home/Introduction'
import AiandHowitsWork from '../Component/Home/AiandHowitsWork'
import SpecialAddress from '../Component/Home/SpecialAddress'
import team from '.././Asset/About/about_group.jpg'
import Stories from '../Component/Home/Stories'

const Home = () => {
  return (
    <div className=''>
        <Introduction/>

        <AiandHowitsWork/>
        <SpecialAddress/>
        
      <Stories/>
      <section className='bg-black'>
         <div className='pt-10'>
              <div className='container mx-auto'>
                 <div className='flex lg:flex-nowrap flex-wrap rounded-[30px] overflow-hidden 2xl:mx-10 mx-5'>
                     <div className="lg:w-1/2 w-full">
                         <img src={team} alt="" className='h-full object-cover'/>
                     </div>
                     <div className='lg:w-1/2 w-full bg-[#222222]'>
                         <div className='sm:p-[65px] sx:p-[40px] p-[20px] text-white'>
                            <p>Mentorship programs</p>
                            <h3 className="text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sx:leading-[46px] leading-[28px] mt-4">Get hands-on experience in AI <br /> research</h3>
                            <p className='sm:text-[16px] text-[14px] mt-10 sm:pt-4'>We’re passionate about introducing people to the extraordinary world of AI. Our AI Mentorship (AIM) and EMEA programs let PhD candidates conduct open science research in collaboration with their university, academic advisor, and AI at Meta mentor participants as full-time AI at Meta employees.</p>
                            <p className='sm:text-[16px] text-[14px] mt-5'>We currently have agreements in place with prestigious universities in the United States, France, Israel and the United Kingdom.</p>
                            <p className='mt-10 sm:pt-4 sm:text-[18px] text-[16px] font-[600]'>For more about these programs, reach out to us at MetaAIM@meta.com</p>
                         </div>
                     </div>
                 </div>
              </div>
         </div>
      </section>
    </div>
  )
}

export default Home
