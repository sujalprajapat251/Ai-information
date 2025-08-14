import React, { use, useMemo, useState } from 'react'
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "../../reactBeats/draggable-card";
import { motion, AnimatePresence } from "framer-motion";

const blogData = [
    // Column 1
    {
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        title: "E-Learning App Design And How To Make It Better",
        description:
            "Kids and adults are becoming more and more techno-savvy, especially the kids who are used to all kinds of gadgets from a very small age.",
        tags: ["Design"],
        column: 1,
        className: "md:absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
        img: "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "How to Integrate Combine with SwiftUI to Make Better Apps",
        description:
            "SwiftUI and Combine are Apple’s latest frameworks. With their introduction, the...",
        tags: ["Design"],
        column: 1,
        className: "md:absolute top-40 left-[25%] rotate-[-7deg]",

    },

    // Column 2
    {
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        title: "How Apple’s M1 Chips Make macOS Development Much Less Costly",
        description:
            "The macOS market share is much smaller than the iOS one. There are many, many more iPhones out there, they dominate Apple’s revenues so that’s where most of their attention goes.",
        tags: ["Development"],
        column: 2,
        className: "md:absolute top-5 left-[40%] rotate-[8deg]",

    },
    {
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
        title: "Why AI Assistants Are Changing Software Development",
        description:
            "From debugging to code generation, AI tools are making developers faster and more productive.",
        tags: ["Development", "Management"],
        column: 2,
        className: "md:absolute top-32 left-[55%] rotate-[10deg]",

    },


    // Column 3
    {
        img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "How To Outsource Web Development And Web Design",
        description:
            "Everything is within reach of today’s individual. All you need is a phone or a laptop...",
        tags: ["Design", "Development"],
        column: 3,
        className: "md:absolute top-20 right-[35%] rotate-[2deg]",

    },
    {
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        title: "What Makes Something Beautiful and How To...",
        tags: ["Design"],
        column: 3,
        className: "md:absolute top-24 left-[45%] rotate-[-7deg]",

    },
    {
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Balancing Creativity and Functionality in Product Design",
        description:
            "Design is not just about aesthetics—it must also serve the intended function efficiently.",
        tags: ["Design", "Marketing"],
        column: 3,
        className: "md:absolute top-8 left-[30%] rotate-[4deg]",

    },

];

const items = [
    {
        title: "Tyler Durden",
        image:
            "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
        title: "The Narrator",
        image:
            "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
        title: "Iceland",
        image:
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
        title: "Japan",
        image:
            "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
        title: "Norway",
        image:
            "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
        title: "New Zealand",
        image:
            "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
        title: "Canada",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
];
const Stories = () => {
    const [tab, setTab] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);
    const tabs = ["All", "Design", "Development", "Management", "Marketing"];
    const filterData = useMemo(() => {
        if (tab === "All") return blogData;
        return blogData.filter((item) =>
            item.tags.some((tag) => tag.toLowerCase() === tab.toLowerCase())
        );
    }, [tab]);
    return (
        <>
            <div className="bg-black text-white font-sans min-h-screen px-6 lg:px-20 2xl:py-16 py-8">
                {/* Header */}
                <header className="flex flex-wrap justify-between items-center py-6   ">
                    <div className="flex items-center gap-4">
                        {/* <button className="text-2xl">&#9776;</button> */}
                        <h2 className="2xl:text-5xl md:text-3xl  text-2xl font-semibold text-white text-center md:mb-5 mb-3 2xl:leading-[60px]" data-aos="fade-up">This is where we tell <span className="text-themedark fond-extrabold">stories</span></h2>

                    </div>
                    <button className="bg-white text-black px-4 py-2">Contact Us</button>
                </header>

                {/* Tabs */}
                <div className="flex gap-6 overflow-auto" data-aos="fade-up">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`pb-2 text-sm font-medium ${t === tab
                                ? "text-themedark border-b border-themedark"
                                : "text-gray-400 "
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                {/* <main className="mt-8 grid grid-cols-1 xl:grid-cols-3  md:grid-cols-2 gap-8">
                    {[1, 2, 3].map((col) => (
                        <div key={col} className="flex flex-col gap-6 justify-start">
                            {filterData
                                .filter((item) => item.column === col)
                                .map((item, index) => (
                                    <article key={index} className='border border-white rounded-lg overflow-hidden' data-aos="fade-up">
                                        {item.img && (
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className={`w-full object-cover ${col === 2 ? "h-64" : "h-48"
                                                    }`}
                                            />
                                        )}
                                        <div className='p-5'>
                                            <h2
                                                className={`font-semibold ${col === 2 ? "text-2xl mt-4" : "text-lg mt-4"
                                                    }`}
                                            >
                                                {item.title}
                                            </h2>
                                            {item.description && (
                                                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                                            )}
                                            {item.tags && (
                                                <p className="text-xs text-gray-400 mt-2">
                                                    {item.tags.join(" ")}
                                                </p>
                                            )}
                                        </div>
                                        <hr></hr>
                                    </article>
                                ))}
                        </div>
                    ))}

                </main> */}
                <DraggableCardContainer className="relative md:flex min-h-screen w-full items-center justify-center overflow-clip hidden top-10">
                    <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                        {tab}
                    </p>
                    {filterData.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`card-${index}`}
                            className={item.className}
                            onClick={() => setSelectedItem({ ...item, index })}
                            style={{ cursor: "pointer" }}

                        >
                            <DraggableCardBody className={`${item.className} flex flex-col`} >
                                <article >
                                    {item.img && (
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="pointer-events-none relative z-10 h-[200px] w-full object-cover"
                                        />
                                    )}

                                    <hr className="mt-3" />

                                    <div className="p-3">
                                        {item.tags && (
                                            <p className="text-xs text-gray-400 mt-2">
                                                #{item.tags.join(" #")}
                                            </p>
                                        )}
                                        <h2 className="font-semibold text-lg mt-4">
                                            {item.title}
                                        </h2>

                                    </div>
                                </article>
                            </DraggableCardBody>
                        </motion.div>
                    ))}
                </DraggableCardContainer>
                <div className='md:hidden flex flex-col w-full overflow-hidden'>
                    {filterData.map((item, index) => (
                        <motion.div
                            key={index}
                            layoutId={`smcard-${index}`}
                            className={` bg-themeblack p-6 g-4 w-[100%] rotate-0 mt-4`}
                            onClick={() => setSelectedItem({ ...item, index })}
                            style={{ cursor: "pointer" }}
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <article>
                                {item.img && (
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="pointer-events-none relative z-10 h-[200px] w-full object-cover"
                                    />
                                )}

                                <hr className="mt-3" />

                                <div className="p-3">
                                    {item.tags && (
                                        <p className="text-xs text-gray-400 mt-2">
                                            #{item.tags.join(" #")}
                                        </p>
                                    )}
                                    <h2 className="font-semibold text-lg mt-4">
                                        {item.title}
                                    </h2>

                                </div>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                        onClick={() => setSelectedItem(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            layoutId={`card-${selectedItem.index}`}
                            className="bg-themeblack rounded-lg overflow-hidden shadow-lg p-6 text-white"
                            style={{
                                width: "400px",
                                transformStyle: "preserve-3d",
                            }}
                            initial={{ rotateY: 90, scale: 1 }}
                            animate={{
                                rotateY: 0,
                                scale: window.innerWidth > 768 ? 1.1 : 0.8,
                                transition: { duration: 0.5 },
                            }}
                            exit={{ scale: 1 }}
                        >
                            <article>
                                {selectedItem.img && (
                                    <img
                                        src={selectedItem.img}
                                        alt={selectedItem.title}
                                        className="pointer-events-none relative h-[200px] z-10 w-full object-cover"
                                    />
                                )}

                                <hr className="mt-3" />

                                <div className="p-3">
                                    {selectedItem.tags && (
                                        <p className="text-xs text-gray-400 mt-2">
                                            #{selectedItem.tags.join(" #")}
                                        </p>
                                    )}
                                    <h2 className="font-semibold text-lg mt-4">
                                        {selectedItem.title}
                                    </h2>

                                    {selectedItem.description && (
                                        <p className="text-gray-500 text-sm mt-2">
                                            {selectedItem.description}
                                        </p>
                                    )}
                                </div>
                            </article>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Stories
