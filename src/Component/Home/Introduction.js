import React, { useEffect, useRef, useState } from "react";
import DotParticleCanvas from "../../reactBeats/DotParticleCanvas";
import TextType from "../../reactBeats/TextType";
import CurvedLoop from "../../reactBeats/CurvedLoop";
import Aos from "aos";
import person1 from '../../Asset/Home/person1.webp'
import person2 from '../../Asset/Home/person2.webp'
import person3 from '../../Asset/Home/person3.png'
import person4 from '../../Asset/Home/person4.webp'
import person5 from '../../Asset/Home/person5.webp'


import "aos/dist/aos.css";
import Stack from "../../reactBeats/Stack";
import { CanvasConfettiCursor } from "../../reactBeats/CanvasConfettiCursor";
const images = [
    { id: 1, img: person1 },
    { id: 2, img: person2 },
    { id: 3, img: person3 },
    { id: 4, img: person4 },
    { id: 5, img: person5 }

];
const Introduction = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true }); // 1s animation, triggers once
    }, [])
    const containerRef = useRef(null);
    return (
        <>
            <div
                ref={containerRef}
                className="relative xl:h-[900px] md:h-[600px] h-[] w-full bg-themeblack overflow-hidden"
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 px-8 xl:w-[50%] md:w-[70%] m-auto flex items-center justify-center  flex-col">
                    <h2 className="2xl:text-5xl md:text-3xl  text-lg font-semibold text-white text-center" data-aos="fade-up">OpenAI, <span className="text-themedark fond-extrabold">NVIDIA</span> Propel AI Innovation With New Optimized Open Models</h2>
                    <p className="text-[#f0f0f0] text-center xl:text-base text-normal   " data-aos="fade-up" >New <span className="text-themedark">NVIDIA</span> technologies are enabling instant world reconstruction, spatial reasoning, and large-scale simulation on NVIDIA DGX Cloud and NVIDIA RTX PRO Blackwell servers.</p>
                    <p className="text-[#f0f0f0] text-center" data-aos="fade-up">Advanced blueprints, vision language models and synthetic data generation extensions from <span className="text-themedark">NVIDIA</span> Metropolis enhance productivity and improve safety across environments..</p>
                    <div className="w-[200px] bg-themedark rounded-full text-white hover:bg-white hover:text-themedark hover:font-extrabold mt-[20px]  cursor-pointer" data-aos="fade-up">
                        <p className="p-3 text-lg text-center">Contact Us</p>
                    </div>
                </div>
            </div>
            {/* <div className="bg-black">
        <CurvedLoop
                marqueeText="OpenAI’s New Open-Source Models Accelerated on RTX AI PCs"
                speed={5}
                curveAmount={600}
                direction="left"
                interactive={false}
                className="bg-black text-5xl"
            />
        </div> */}


            {/* second section */}

            <section className="bg-black py-[40px]">
                <div className="flex flex-wrap justify-center items-center container">
                    <div className="px-8 lg:w-1/2">
                        <h2 className="text-[50px] font-semibold text-white " data-aos="fade-up"><span className="text-themedark fond-extrabold">NVIDIA</span> at SIGGRAPH Research Special Address</h2>
                        <p className="text-[#f0f0f0]" data-aos="fade-up">New <span className="text-themedark">NVIDIA</span> technologies are enabling instant world reconstruction, spatial reasoning, and large-scale simulation on NVIDIA DGX Cloud and NVIDIA RTX PRO Blackwell servers.</p>
                    </div>
                    <div>
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 400, height: 400 }}
                            cardsData={images}
                        />
                    </div>
                </div>
            </section>

        </>

    );
};

export default Introduction;
