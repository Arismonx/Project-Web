// eslint-disable-next-line no-unused-vars
import React from "react";

import Color from '../img/color.png'


function AboutMe() {
    return (
        <div className="my-10">

            <div className="grid grid-cols-2 ">
                <div className="col-span-1">
                    <hr className="my-2 sm:my-4 w-12 sm:w-20 p-0.5 sm:p-1 border-none rounded-full bg-mint" />
                    <h1 className="text-lg sm:text-3xl font-semibold ">
                        About Me
                    </h1>
                </div>
                <p className="py-4 text-xs sm:text-base tracking-wide col-start-1 flex items-center">My name is Samart. I'm 20 years old. Right now I'm practicing writing and designing websites. and programming code If there is progress, I will update in the future.</p>
                <div className="flex items-center justify-center">
                    <img src={Color} alt="" className="h-52 w-52 object-cover sm:h-70 sm:w-full" />
                </div>
            </div>

        </div>
    );
}

export default AboutMe;