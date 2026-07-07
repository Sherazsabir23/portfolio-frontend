import react, { useState } from "react";
import { Link } from "react-scroll"

function Home() {
    return (
        <section id="home">
            <div className="w-full flex justify-center flex-col items-center py-10 mt-10 md:py-18">
                <div className=" w-[200px] h-[200px]  rounded-full bg-[url('/hero.jpeg')] bg-cover bg-center p ">
                </div>
                <div className="w-full text-white body-font flex justify-center items-center flex-col font-bold text-center ">
                    <h1 className=" md:text-4xl text-3xl max-w-md w-full  pt-3" >Transforming Ideas Into Powerful <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        Digital Experiences.
                    </span></h1>
                    <p className="text-gray-500 max-w-md w-full px-5 py-4 text-sm">I'm a Full Stack Developer who enjoys building modern and responsive websites. I love turning ideas into real web applications that are simple, fast, and easy to use.</p>
                </div>
                <div className="space-x-4 heading-font mt-3 flex flex-nowrap ">
                    <Link to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-30}
                        activeClass="text-blue-500" className=" px-6 py-3 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-150 text-black bg-white whitespace-nowrap " >Get in Touch</Link>
                    <button className="px-6 py-3 bg-transparent cursor-pointer  rounded-full border-2 text-white border-white whitespace-nowrap">Download CV</button>
                </div>
            </div>

        </section>
    )
}


export default Home;