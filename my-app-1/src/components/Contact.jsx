// eslint-disable-next-line no-unused-vars
import React from "react";

function Contact() {
    return (
        <div className="my-11">
            <hr className="my-2 sm:my-4 w-12 sm:w-20 p-0.5 sm:p-1 border-none rounded-full bg-red" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-md sm:text-3xl font-semibold ">
                        contact:
                    </h1>
                    <a href="https://discord.gg/Y9DQ5qZ5" target="_blank" className="px-1 mx-2 sm:px-3 sm:mx-5 text-xs sm:text-base hover:bg-white rounded-lg hover:text-black hover:duration-200">.discord</a>
                    <a href="https://www.facebook.com/profile.php?id=100013624603928" target="_blank" className="px-1 mx-2 sm:px-3 sm:mx-5 text-xs sm:text-base hover:bg-white rounded-lg hover:text-black hover:duration-200">.facebook</a>
                </div>
                <a href="" className="px-1 sm:px-3 text-xxs sm:text-base hover:bg-white rounded-lg hover:text-black hover:duration-200 text-center">.Make by Samart</a>
            </div>
        </div>
    );

}

export default Contact;