// eslint-disable-next-line no-unused-vars
import React from "react";


// eslint-disable-next-line react/prop-types
function Body({ children }){
    return (
        <div className="bg-black text-white min-h-screen font-IBM">
            {children}
        </div>
    );
}

export default Body;