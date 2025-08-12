import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";
import xAi from '../Asset/Contact/XAi.svg'
import grok from '../Asset/Contact/Grok.svg'
import joinGrok from '../Asset/Contact/JoinGrok.svg'

const Contact = () => {
  return (
    <div className='bg-black text-white'>
        <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-normal pb-20">Contact</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-gray-800 pb-12">
                <div className="flex flex-col gap-20 border-r border-gray-800 pr-8">
                    <div className="text-2xl"><FaRegComment className='text-4xl' /></div>
                    <div>
                        <h2 className="text-xl font-normal mb-4">Contact Product Support</h2>
                        <p className="text-[#7D8187] text-md mb-4">For all things related to Grok and our products.</p>
                        <div className="flex gap-3 mt-2">
                            <button className="px-4 py-2 border border-gray-700 rounded-full text-md hover:bg-gray-800">EMAIL SUPPORT</button>
                            <button className="px-4 py-2 border border-gray-700 rounded-full text-md hover:bg-gray-800">CALL SUPPORT</button>
                        </div>  
                    </div>
                </div>
                <div className="flex flex-col gap-20 pl-8">
                    <div className="text-2xl"><GiSelfLove className='text-4xl' /></div>
                    <div>
                        <h2 className="text-xl font-normal mb-4">Contact Sales</h2>
                        <p className="text-[#7D8187] text-md mb-4">Discover how we can work together.</p>
                        <button className="px-4 py-2 border border-gray-700 rounded-full text-sm mt-2 hover:bg-gray-800">EMAIL SALES</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-gray-800">
                <div className='border-l border-[#1f2937] pl-6 pt-12 pb-8'>
                    <div><img src={xAi} alt="" className='w-10 mb-4' /></div>
                    <h3 className="text-xl mt-2">Visit xAI on <BsTwitterX className='text-sm inline-block' /></h3>
                    <p className="text-[#7D8187] text-md pt-4">Visit our official xAI <BsTwitterX className='text-sm inline-block' /> account.</p>
                </div>
                <div className='border-l border-[#1f2937] pl-6 pt-12 pb-8'>
                    <div><img src={grok} alt="" className='w-10 mb-4' /></div>
                    <h3 className="text-xl mt-2">Visit Grok on <BsTwitterX className='text-sm inline-block' /></h3>
                    <p className="text-[#7D8187] text-md pt-4">Visit our official Grok <BsTwitterX className='text-sm inline-block' /> account.</p>
                </div>
                <div className='border-l border-[#1f2937] pl-6 pt-12 pb-8'>
                    <div><img src={joinGrok} alt="" className='w-10 h-10 mb-4' /></div>
                    <h3 className="text-xl mt-2">Join Grok on Discord</h3>  
                    <p className="text-[#7D8187] text-md pt-4">Visit our official Grok Discord community.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 pt-8 text-sm">
                <div>
                    <p className="uppercase font-medium text-[#7D8187]">Media</p>
                    <p className="mt-1">media@x.ai</p>
                </div>
                <div>
                    <p className="uppercase font-medium text-[#7D8187]">Safety</p>
                    <p className="mt-1">safety@x.ai</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact