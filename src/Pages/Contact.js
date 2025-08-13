import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";
import xAi from '../Asset/Contact/XAi.svg'
import grok from '../Asset/Contact/Grok.svg'
import joinGrok from '../Asset/Contact/JoinGrok.svg'
import contact from "../Asset/Contact/contact.jpg";

const Contact = () => {
  function generateStars(count, size, duration) {
    const star = document.createElement("div");
    star.classList.add("star-layer");
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animation = `animStar ${duration}s linear infinite`;

    let boxShadow = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * 2000);
      boxShadow.push(`${x}px ${y}px #FFF`);
    }
    star.style.boxShadow = boxShadow.join(", ");

    const after = document.createElement("div");
    after.style.content = '" "';
    after.style.position = "absolute";
    after.style.top = "2000px";
    after.style.width = size + "px";
    after.style.height = size + "px";
    after.style.boxShadow = star.style.boxShadow;

    star.appendChild(after);
    document.body.appendChild(star);
  }
  generateStars(40, 1, 50);
  generateStars(20, 2, 100);
  generateStars(10, 3, 150);
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="text-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-normal pb-20">Contact</h1>

          <div className="flex flex-col md:flex-row gap-8 border-gray-800 pb-12">
            <div className="flex flex-col gap-20 md:border-r border-gray-800 pr-8 flex-1">
              <div className="text-2xl"><FaRegComment className="text-4xl" /></div>
              <div>
                <h2 className="text-xl font-normal mb-4">Contact Product Support</h2>
                <p className="text-[#7D8187] text-md mb-4">For all things related to Grok and our products.</p>
                <div className="flex gap-3 mt-2 flex-wrap">
                  <button className="px-4 py-2 border border-gray-700 rounded-full text-md hover:bg-gray-800">EMAIL SUPPORT</button>
                  <button className="px-4 py-2 border border-gray-700 rounded-full text-md hover:bg-gray-800">CALL SUPPORT</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-20 md:pl-8 flex-1">
              <div className="text-2xl"><GiSelfLove className="text-4xl" /></div>
              <div>
                <h2 className="text-xl font-normal mb-4">Contact Sales</h2>
                <p className="text-[#7D8187] text-md mb-4">Discover how we can work together.</p>
                <button className="px-4 py-2 border border-gray-700 rounded-full text-sm mt-2 hover:bg-gray-800">EMAIL SALES</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 py-12 border-gray-800">
            <div className="border-l border-[#1f2937] pl-6 pt-12 pb-8 flex-1">
              <div><img src={xAi} alt="" className="w-10 mb-4" /></div>
              <h3 className="text-xl mt-2">Visit xAI on <BsTwitterX className="text-sm inline-block" /></h3>
              <p className="text-[#7D8187] text-md pt-4">Visit our official xAI{" "}<BsTwitterX className="text-sm inline-block" /> account.</p>
            </div>

            <div className="border-l border-[#1f2937] pl-6 pt-12 pb-8 flex-1">
              <div><img src={grok} alt="" className="w-10 mb-4" /></div>
              <h3 className="text-xl mt-2">Visit Grok on <BsTwitterX className="text-sm inline-block" /></h3>
              <p className="text-[#7D8187] text-md pt-4">Visit our official Grok{" "}<BsTwitterX className="text-sm inline-block" /> account.</p>
            </div>

            <div className="border-l border-[#1f2937] pl-6 pt-12 pb-8 flex-1">
              <div><img src={joinGrok} alt="" className="w-10 h-10 mb-4" /></div>
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

        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="md:w-1/2 w-full">
              <div className="h-full">
                <img src={contact} alt="Contact" className="w-full h-full object-cover rounded-lg"/>
              </div>
            </div>
            <form className="w-full md:w-1/2 space-y-6 h-full">
              <div>
                <label className="block mb-2 text-sm font-medium">Company size</label>
                <select className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option>Please Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Company name</label>
                <input type="text" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">First name</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Last name</label>
                  <input type="text" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Work email</label>
                  <input type="email" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Phone number</label>
                  <input type="tel" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"/>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Can you share more about your business needs and challenges?
                </label>
                <textarea rows="5" className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
              </div>
              <button type="submit" className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full text-sm">Submit</button>
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact