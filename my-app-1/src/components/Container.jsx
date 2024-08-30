// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Container({ children }){
    return (
        <div className="container mx-auto max-w-screen-lg px-6 lg:px-0">
            { children }
        </div>
    );
}

export default Container;