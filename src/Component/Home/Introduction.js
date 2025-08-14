import React, { useEffect, useRef, useState } from "react";
import DotParticleCanvas from "../../reactBeats/DotParticleCanvas";
import TextType from "../../reactBeats/TextType";
import CurvedLoop from "../../reactBeats/CurvedLoop";
import Aos from "aos";



import "aos/dist/aos.css";
import "../../style/Sujal.css"
import { CanvasConfettiCursor } from "../../reactBeats/CanvasConfettiCursor";
import video from '../../Asset/Home/team.mp4'





const Introduction = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true }); // 1s animation, triggers once
    }, [])
    const containerRef = useRef(null);




    return (
        <>
            <div
                ref={containerRef}
                className="relative xl:h-[900px] md:h-[600px] h-[500px] w-full bg-themeblack overflow-hidden"
            >
                {/* Particle Background */}
                <div className="absolute inset-0 z-0">
                    <DotParticleCanvas containerRef={containerRef} />
                </div>

                {/* Confetti */}
                <div className="absolute inset-0 pointer-events-none">
                    <CanvasConfettiCursor
                        containerRef={containerRef}
                        fillParent={true}
                        colors={["#9D00FF", "#FF00AA"]}
                        overlayOpacity={0.5} // reduce opacity
                    />
                </div>

                {/* Foreground Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 2xl:px-8 px-3 xl:w-[50%] md:w-[70%] w-full m-auto flex items-center justify-center  flex-col ">
                    <h2 className="2xl:text-5xl md:text-3xl  text-2xl font-semibold text-white text-center md:mb-5 mb-3 2xl:leading-[60px]" data-aos="fade-up">OpenAI, <span className="text-themedark fond-extrabold">NVIDIA</span> Propel AI Innovation With New Optimized Open Models</h2>
                    <p className="text-[#f0f0f0] text-center sm:text-base text-xs  md:mb-5 mb-3  px-5" data-aos="fade-up" >New <span className="text-themedark">NVIDIA</span> technologies are enabling instant world reconstruction, spatial reasoning, and large-scale simulation on NVIDIA DGX Cloud and NVIDIA RTX PRO Blackwell servers.</p>
                    <p className="text-[#f0f0f0] text-center sm:text-base text-xs md:mb-5 mb-3  px-5" data-aos="fade-up">Advanced blueprints, vision language models and synthetic data generation extensions from <span className="text-themedark">NVIDIA</span> Metropolis enhance productivity and improve safety across environments..</p>
                    <div className="md:w-[200px] w-[100px] bg-themedark rounded-full text-white hover:bg-white hover:text-themedark hover:font-extrabold mt-[20px]  cursor-pointer" data-aos="fade-up">
                        <p className="p-3 md:text-lg text-sm text-center">Contact Us</p>
                    </div>
                </div>
            </div>
            (
            <section className="bg-black text-white px-8 py-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    {/* Left Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Powering Business Success with AI <br /> & Data Analytics Services
                        </h1>

                        <p className="text-gray-300 mb-4">
                            Infosys <span className="font-bold">Data analytics</span> and AI, part of{" "}
                            <a href="#" className="text-blue-400 underline">
                                Infosys Topaz
                            </a>{" "}
                            enables enterprises to{" "}
                            <span className="font-bold">
                                unlock new business possibilities with Data analytics and AI.
                            </span>
                        </p>

                        <p className="text-gray-400 mb-4">
                            The transformation unleashed by generative AI and advanced data
                            analytics, with a cloud foundation, is changing business in profound,
                            unalterable ways. Opportunities of the future will lead businesses to
                            become more connected, more intelligent, and more autonomous creating a
                            digital mesh of enterprises working together to deliver value to end
                            consumers, citizens, and customers through a strategically crafted
                            symbiotic and collaborative ecosystem.
                        </p>

                        <p className="text-gray-400 mb-6">
                            Data & AI will help enterprises unlock these next generation opportunities
                            to:
                        </p>

                       
                    </div>

                    {/* Right Video/Image */}
                    <div className="relative">
                        <video
                            src={video}
                            alt="Data Analytics"
                            className="rounded-lg shadow-lg"
                        />
                        <button className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-blue-500 rounded-full p-4 hover:bg-blue-600 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Introduction;
