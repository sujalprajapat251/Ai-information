import React, { useRef, useState } from "react";
import SplitText from "../../reactBeats/SplitText";
import DotParticleCanvas from "../../reactBeats/DotParticleCanvas";
import TextType from "../../reactBeats/TextType";
import CurvedLoop from "../../reactBeats/CurvedLoop";

const Introduction = () => {
    const [showTypeText, setShowTypeText] = useState(false);
    const splitTextHasAnimated = useRef(false); // track animation without causing re-render
    const MemoSplitText = React.memo(SplitText);
    const handleAnimationComplete = () => {
        if (!splitTextHasAnimated.current) {
            splitTextHasAnimated.current = true;
            setShowTypeText(true);
        }
    };

    return (
        <>
            <div className="relative h-[900px] w-full bg-themeblack overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0">
                <DotParticleCanvas />
            </div>
            <div className="absolute inset-0 z-0">
            <CurvedLoop
                marqueeText="OpenAI’s New Open-Source Models Accelerated on RTX AI PCs"
                speed={5}
                curveAmount={600}
                direction="right"
                interactive={false}
                className="bg-black text-5xl"
            />
            </div>
           
            {/* Foreground Text Content */}
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 px-8 w-[50%] m-auto flex items-center justify-center h-[50%] flex-col ">
                <MemoSplitText
                    text="OpenAI, NVIDIA Propel AI Innovation With New Optimized Open Models"
                    className="text-[50px] font-semibold text-white text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                {showTypeText && (
                    <TextType
                        text={[
                            "NVIDIA delivers industry-leading gpt-oss-120b performance of 1.5M tokens per second on a single NVIDIA Blackwell GB200 NVL72 system, optimized for the world’s largest AI inference infrastructure.",
                        ]}
                        typingSpeed={10}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white text-center text-xl p-5"
                    />
                )}
                <div className="w-[200px] bg-themedark rounded-full text-white hover:bg-transparent hover:text-themedark hover:font-extrabold">
                    <p className="p-3  text-lg text-center">Contact Us</p>
                </div>
            </div>
           

        </div>
        </>
    
    );
};

export default Introduction;
