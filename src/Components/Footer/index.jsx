import React from 'react'
import { SiF1 } from "react-icons/si";
import AppStore from "../../assets/App_Store.png"
import GooglePlay from "../../assets/Google_Play.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
            <div className="bg-[#0B132B] px-12 py-10">
            <div className="flex items-start justify-between">
                <div>
                <h1 className="text-5xl leading-tight font-extrabold tracking-tight uppercase text-white">Download the Official F1 App</h1>
                </div>

                <div className="mt-4 flex gap-10">
                <a href="https://apps.apple.com/us/app/formula-1/id835022598" target='_blank'>
                <div className='bg-[#0B132B] w-55 h-15 border-[#6fffe9] flex border-2 rounded-xl items-center justify-center gap-4 hover:scale-108 transition-all duration-300 relative cursor-pointer'>
                    <div className='w-8 h-8 absolute left-4'><img src={AppStore} alt="" /></div>
                    <div className='flex flex-col absolute right-5'>
                        <p className='text-white'>Download on the</p>
                        <h2 className='text-white text-xl'>App Store</h2>
                    </div>
                </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.formulaone.production" target='_blank'>
                <div className='bg-[#0B132B] w-55 h-15 border-[#6fffe9] flex border-2 rounded-xl items-center justify-center gap-4 hover:scale-108 transition-all duration-300 relative cursor-pointer'>
                    <div className='w-8 h-8 absolute left-4'><img src={GooglePlay} alt="" /></div>
                    <div className='flex flex-col'>
                        <p className='text-white'>Get it on</p>
                        <h2 className='text-white text-xl'>Google Play</h2>
                    </div>
                </div>
                </a>
                </div>
            </div>

            <div className="mt-16 flex gap-20 text-lg font-medium">
                <a href="/Teams" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p >Teams</p></a>
                <a href="/Drivers" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p>Drivers</p></a>
                <a href="/Schedule" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p>Schedule</p></a>
                <a href="/Results" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p>Results</p></a>
                <a href="/Fantasy&Gaming" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p>Fantasy & Gaming</p></a>
                <a href="/HallOfFame" className="transition-all duration-300 hover:text-[#6fffe9] text-white hover:text-xl"><p>Hall of Fame</p></a>
            </div>

            <div className="mt-12">
                <div className="h-1.5 w-full bg-[#5BC0BE]"></div>

                <div className="h-0.5"></div>

                <div className="h-1.5 w-full bg-[#5BC0BE]"></div>
            </div>

            <div className="mt-14 flex items-center justify-between">
                <div className="flex items-center gap-10">
                <SiF1 className='h-13 w-13 text-[#5BC0BE]'/>

                <div className="flex gap-14 text-lg text-[#3a506b]">
                    <a href="https://www.facebook.com/Formula1" target='_blank' className="transition-all duration-300 hover:text-[#6fffe9] text-white"><FaFacebook /></a>
                    <a href="https://x.com/f1" target='_blank' className="transition-all duration-300 hover:text-[#6fffe9] text-white"><FaXTwitter /></a>
                    <a href="https://www.instagram.com/f1/" target='_blank' className="transition-all duration-300 hover:text-[#6fffe9] text-white"><FaInstagram /></a>
                    <a href="https://www.youtube.com/F1" target='_blank' className="transition-all duration-300 hover:text-[#6fffe9] text-white"><FaYoutube /></a>
                </div>
                </div>
            </div>
            <div className="mt-10 text-sm text-[white]"><p>© 2003–2026 Formula One World Championship Limited</p></div>
            </div>

    )
}

export default Footer