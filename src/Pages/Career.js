import React from 'react'
import contact from '../Asset/Contact/contact.png'

const Career = () => {
  return (
    <>
    <section className="bg-black text-white">
    <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto">Be part of a team that’s shaping the future. We’re looking for passionate people to grow with us.</p>
    </div>
    </section>

    <section className="bg-black text-white container mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 transform hover:scale-105 transition duration-500 ease-in-out">
        <img src={contact} alt="Team" className="rounded-2xl shadow-2xl w-full" style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.6)" }}/>
        </div>
        <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-4">Why Work With Us?</h2>
        <p className="mb-6 text-gray-300">We foster an inclusive environment where innovation thrives. From flexible schedules to career development, we support our team every step of the way.</p>
        <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">✅ Collaborative team culture</li>
            <li className="flex items-center gap-2">✅ Flexible work hours</li>
            <li className="flex items-center gap-2">✅ Remote-friendly environment</li>
            <li className="flex items-center gap-2">✅ Opportunities for growth</li>
        </ul>
        </div>
    </div>
    </section>

    <section className="bg-black text-white py-16">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Open Positions</h2>
        <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col border border-gray-700 rounded-2xl p-6 w-full md:w-[300px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.4)", background: "linear-gradient(145deg, #1c1c1c, #0e0e0e)"}}>
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="mb-4 text-gray-400">Remote • Full-time</p>
            <p className="mb-6 text-gray-300">Work with the latest web technologies to build user-friendly interfaces.</p>
            <a href="#" className="inline-block px-4 py-2 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">Apply Now</a>
        </div>

        <div className="flex flex-col border border-gray-700 rounded-2xl p-6 w-full md:w-[300px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.4)", background: "linear-gradient(145deg, #1c1c1c, #0e0e0e)"}}>
            <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
            <p className="mb-4 text-gray-400">New York, NY • Hybrid</p>
            <p className="mb-6 text-gray-300">Design beautiful and intuitive experiences for our products.
            </p>
            <a href="#" className="inline-block px-4 py-2 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">Apply Now
            </a>
        </div>

        <div className="flex flex-col border border-gray-700 rounded-2xl p-6 w-full md:w-[300px] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                style={{boxShadow: "0 8px 25px rgba(0,0,0,0.4)",background: "linear-gradient(145deg, #1c1c1c, #0e0e0e)"}}>
            <h3 className="text-xl font-semibold mb-2">Backend Engineer</h3>
            <p className="mb-4 text-gray-400">Remote • Full-time</p>
            <p className="mb-6 text-gray-300">Build scalable APIs and ensure performance and security.</p>
            <a href="#" className="inline-block px-4 py-2 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">Apply Now</a>
        </div>
        </div>
    </div>
    </section>

    <section className="bg-black text-white container mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-semibold mb-4">Don’t see the right role?</h2>
    <p className="mb-6 text-gray-300">We’re always looking for talented individuals. Send us your resume and we’ll be in touch.</p>
    <a href="#" className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">Send Resume</a>
    </section>

    <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
            <p className="text-gray-400 tracking-widest text-sm">[ OUR PRINCIPLES ]</p>
            <h1 className="text-4xl md:text-5xl font-semibold mt-2">Coding ≥ ∀ x ∀ x</h1>
        </div>
        <p className="text-gray-300 md:max-w-lg">We are driven by ambitious goals, fast execution, and a strong sense of urgency. Join us if you want to shape the next generation of AI models and products.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12">
        <div className="flex flex-col gap-12 border-r text-white border-gray-800 pr-8">
            <div>
            <div className="text-2xl mb-4">👤</div>
            <h3 className="font-semibold text-lg">Competitive compensation</h3>
            <p className="text-gray-400 text-md mt-1">Competitive cash and equity-based compensation packages to attract top talent.</p>
            </div>
            <div>
            <div className="text-2xl mb-4">📅</div>
            <h3 className="font-semibold text-lg">Flexible vacation</h3>
            <p className="text-gray-400 text-md mt-1">We work hard but avoid burn out. Take time off when you need it.</p>
            </div>
        </div>

        <div className="flex flex-col gap-12 border-r text-white border-gray-800 pr-8">
            <div>
            <div className="text-2xl mb-4">🩺</div>
            <h3 className="font-semibold text-lg">Health and wellness</h3>
            <p className="text-gray-400 text-md mt-1">Comprehensive health insurance including medical, dental, vision, and disability coverage.</p>
            </div>
            <div>
            <div className="text-2xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg">Visa sponsorship</h3>
            <p className="text-gray-400 text-md mt-1">We support international talent with visa sponsorship to join our team.</p>
            </div>
        </div>

        <div className="flex flex-col gap-12 text-white">
            <div>
            <div className="text-2xl mb-4">❤️</div>
            <h3 className="font-semibold text-lg">Life and family</h3>
            <p className="text-gray-400 text-md mt-1">Life and AD&D insurance and fertility benefits to ensure our team’s well-being and peace of mind.</p>
            </div>
            <div>
            <div className="text-2xl mb-4">⏱️</div>
            <h3 className="font-semibold text-lg">401(k) plan</h3>
            <p className="text-gray-400 text-md mt-1">Retirement savings plan to secure your financial future.</p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Career