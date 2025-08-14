import React, { useEffect, useRef, useState } from "react";
import DotParticleCanvas from "../../reactBeats/DotParticleCanvas";
import TextType from "../../reactBeats/TextType";
import CurvedLoop from "../../reactBeats/CurvedLoop";
import Aos from "aos";



import "aos/dist/aos.css";
import "../../style/Sujal.css"
import { CanvasConfettiCursor } from "../../reactBeats/CanvasConfettiCursor";






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
        </>

    );
};

export default Introduction;
