/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from '../img/logo.png'

function Header(){
    return(
        <div className="py-12">
            <div className="grid grid-cols-2 ">
                <div>
                    <div className="text-3xl sm:text-5xl py-1">
                        <span>hello.</span>
                        <br/>
                        <span>i'm</span>
                        <br/>
                        <span>Samart.</span>
                    </div>
                    <p className="py-8 text-xs sm:text-base tracking-wide mb-3 sm:mb-6 ">I use this website to post work from the university in the subject of web programming. Thank you for visiting the website.</p>
                    <div>
                        <a href="https://github.com/Arismonx" target="_blank" className="text-sm sm:text-xl px-3 py-2 sm:px-4 sm:py-3 border hover:duration-200 rounded-3xl hover:bg-white hover:text-black ">git hub</a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={logo} alt="" className="h-52 w-52 object-cover sm:h-64 sm:w-full" />
                </div>
            </div>
        </div>
    );  
}

export default Header;