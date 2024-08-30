// eslint-disable-next-line no-unused-vars
import React from "react";
import Human from '../img/human.png'
import Navbar from '../img/navbar.png'
import Quiz1 from '../img/quiz1.png'
import Inline from '../img/inline.png'
import Embedded from '../img/embedded.png'
import External from '../img/external.png'
import Responsive from '../img/responsive.png'
import Bootstrap from '../img/bootstrap.png'
import Quiz2 from '../img/quiz2.png'
import Quiz3 from '../img/quiz3.png'
import Form from '../img/form.png'


function Hero() {
   return(
        <div className="my-6">
            <div className="mb-4">
                <hr className="my-2 sm:my-4 w-12 sm:w-20 p-0.5 sm:p-1 border-none rounded-full bg-sea " />
                <h1 className="text-lg sm:text-3xl font-semibold ">
                    All Work
                </h1>
            </div>
            <p className="text-xs sm:text-base tracking-wide">all assignments for the subject web programming COS2204</p>
            <div className="grid grid-cols-6 grid-rows-4 gap-1 my-5"> 
                <div className="col-span-2 bg-111 rounded-lg relative h-full w-full">
                    <img src={Human} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200 rounded-lg bg-white text-black flex justify-center items-center w-full h-full text-xxs sm:text-sm text-center"> 
                            assignments 1 <br/> "introduce yourself"
                        </a>
                    </div>
                </div>
                <div className="col-span-3 bg-111 rounded-lg relative h-full w-full">
                    <img src={Navbar} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200 rounded-lg bg-white text-black flex justify-center items-center w-full h-full text-xxs sm:text-sm text-center"> 
                            assignments 2 <br/> "design home page"
                        </a>
                    </div>
                </div>
                <div className="col-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Quiz1} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            quiz 1 <br/> "html 5"
                        </a>
                    </div>
                </div>
                <div className="col-span-2 bg-111 rounded-lg relative h-full w-full">
                    <img src={Inline} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 3 <br/> "css-inline"
                        </a>
                    </div>
                </div>
                <div className="col-start-3 col-span-2 row-start-2 row-span-2 bg-111 rounded-lg relative h-full w-full">
                    <img src={Embedded} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 4 <br/> "css-embedded"
                        </a>
                    </div>
                </div>
                <div className="col-span-2 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={External} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 5 <br/> "css-external"
                        </a>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Responsive} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 6 <br/> "responsive"
                        </a>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Bootstrap} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 7 <br/> "bootstrap"
                        </a>
                    </div>
                </div>
                <div className="col-start-5 col-spen-1 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Quiz2} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            quiz2 <br/> "home page"
                        </a>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Quiz3} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            quiz3 <br/> "java script"
                        </a>
                    </div>
                </div>
                <div className="col-span-2 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    <img src={Form} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 8 <br/> "form"
                        </a>
                    </div>
                </div>
                <div className="col-span-2 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    {/* <img src={Form} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 8 <br/> "form"
                        </a>
                    </div> */}
                </div>
                <div className="col-span-2 row-span-1 bg-111 rounded-lg relative h-full w-full">
                    {/* <img src={Form} alt="" className="w-full h-full object-cover "/>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
                        <a href="#" className="opacity-0 hover:opacity-100 hover:duration-200  text-xxs sm:text-sm rounded-lg bg-white text-black flex justify-center items-center w-full h-full  text-center"> 
                            assignments 8 <br/> "form"
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
   );
    
}

export default Hero;