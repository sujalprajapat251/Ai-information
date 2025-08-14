import React, { use, useMemo, useState } from 'react'
const blogData = [
    // Column 1
    {
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        title: "E-Learning App Design And How To Make It Better",
        description:
            "Kids and adults are becoming more and more techno-savvy, especially the kids who are used to all kinds of gadgets from a very small age.",
        tags: ["Design"],
        column: 1,
    },
    {
        title: "How to Integrate Combine with SwiftUI to Make Better Apps",
        description:
            "SwiftUI and Combine are Apple’s latest frameworks. With their introduction, the...",
        tags: ["Design"],
        column: 1,
    },

    // Column 2
    {
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        title: "How Apple’s M1 Chips Make macOS Development Much Less Costly",
        description:
            "The macOS market share is much smaller than the iOS one. There are many, many more iPhones out there, they dominate Apple’s revenues so that’s where most of their attention goes.",
        tags: ["Development"],
        column: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
        title: "Why AI Assistants Are Changing Software Development",
        description:
            "From debugging to code generation, AI tools are making developers faster and more productive.",
        tags: ["Development", "Management"],
        column: 2,
    },


    // Column 3
    {
        title: "How To Outsource Web Development And Web Design",
        description:
            "Everything is within reach of today’s individual. All you need is a phone or a laptop...",
        tags: ["Design", "Development"],
        column: 3,
    },
    {
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        title: "What Makes Something Beautiful and How To...",
        tags: ["Design"],
        column: 3,
    },
    {
        img: "https://images.unsplash.com/photo-1581093588401-22d58b6f1c4d?w=800",
        title: "Balancing Creativity and Functionality in Product Design",
        description:
            "Design is not just about aesthetics—it must also serve the intended function efficiently.",
        tags: ["Design", "Marketing"],
        column: 3,
    },

];

const Stories = () => {
    const [tab, setTab] = useState('All');
    const tabs = ["All", "Design", "Development", "Management", "Marketing"];
    const filterData = useMemo(() => {
        if (tab === "All") return blogData;
        return blogData.filter((item) =>
            item.tags.some((tag) => tag.toLowerCase() === tab.toLowerCase())
        );
    }, [tab]);
    return (
        <div className="bg-black text-white font-sans min-h-screen px-6 lg:px-20 2xl:py-16 py-8">
            {/* Header */}
            <header className="flex justify-between items-center py-6   ">
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
            <main className="mt-8 grid grid-cols-1 xl:grid-cols-3  md:grid-cols-2 gap-8">
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
            </main>
        </div>
    );
}

export default Stories
