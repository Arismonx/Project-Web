// eslint-disable-next-line no-unused-vars
import React from "react";
import menu from '../assets/menu.png'
import { useState } from 'react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav className="py-4">
            <div className="flex justify-between items-center p-1">
                <div className="text-4xl">
                    <span>
                        <a href="#" id="top">&lt;/&gt;. </a><br />
                    </span>
                </div>
                <div className="flex justify-center items-center text-base hidden sm:flex">  
                    <div>
                        <a href="#aw" className="tracking-wider px-5 mx-2 py-2 rounded-lg hover:text-black hover:duration-150 hover:bg-sea">work</a>
                        
                    </div>
                    <div>
                        <a href="#a-me" className="tracking-wider px-5 mx-2 py-2 rounded-lg hover:text-black hover:duration-150 hover:bg-mint">about me</a>
                       
                    </div>
                    <div>
                        <a href="#ct" className="tracking-wider px-5 mx-2 py-2 rounded-lg hover:text-black hover:duration-150 hover:bg-red">contact</a>
                    </div>
                    
                </div>
                <div className="flex justify-end sm:hidden">
                    <img src={menu} alt="menu" className="w-20 object-contain cursor-pointer " onClick={toggleDropdown}/>
                </div>
                {isOpen && (
                    <div className="absolute right-10 mt-44 w-40 bg-black border rounded-md shadow-lg">
                        <ul className="py-1">
                            <li className="px-4 py-2 hover:bg-sea hover:text-black cursor-pointer"><a href="#aw" className="px-5 flex justify-center" >work</a></li>
                            <li className="px-4 py-2 hover:bg-mint hover:text-black cursor-pointer"><a href="#a-me" className="px-5 flex justify-center" >about me</a></li>
                            <li className="px-4 py-2 hover:bg-red hover:text-black cursor-pointer"><a href="#ct" className="px-5 flex justify-center" >contact</a></li>
                        </ul>
                    </div>
                 )}
            </div>
        </nav>
    )
}

export default Navbar