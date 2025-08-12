import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <>
  <header className="border-gray-800 bg-[#060606] text-[#9aa0a6]">
  <div className="flex items-center justify-between px-6 py-3">
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-1 text-[#f1f3f4] text-lg font-medium">
        <span className="text-base">Google</span>
        <span className='text-lg'>DeepMind</span>
        <button className="text-sm"><IoIosArrowDown /></button>
      </div>
      <nav className="flex space-x-4 text-sm">
        <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Models</a>
        <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Research</a>
        <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Science</a>
        <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">About</a>
      </nav>
    </div>
    <div className="flex items-center space-x-3">
      <button className="bg-[rgba(241,243,244,0.08)] font-medium px-4 py-1.5 rounded-full text-sm hover:bg-[rgba(241,243,244,0.12)] transition">Build with Gemini</button>
      <button className="bg-[rgba(241,243,244,0.08)] font-medium px-4 py-1.5 rounded-full text-sm hover:bg-[rgba(241,243,244,0.12)] transition">★ Try Gemini</button>
      <button className="bg-[rgba(241,243,244,0.08)] p-2 rounded-full hover:bg-[rgba(241,243,244,0.12)] transition"><IoIosSearch /></button>
    </div>
  </div>
  </header>
    </>
  )
}

export default Header;
