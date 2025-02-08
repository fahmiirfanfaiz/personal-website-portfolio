import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    return(
        <div className="w-screen flex justify-between h-[6vw] bg-[#62CBF9] drop-shadow-lg">
            <div className="h-full font-poppins font-bold text-[#005F73] flex justify-start items-center ml-[4vw] drop-shadow-md">
                fahmiirfan <span className="text-[#daedfb] drop-shadow-md">faiz.</span> 
            </div>
            <ul className="h-full text-white font-montserrat flex justify-end items-center cursor-pointer gap-x-[3vw] mr-[4vw]">
                <li className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:w-full">Home</li>
                <li className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:w-full">About</li>
                <li className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:w-full">Skills</li>
                <li className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:w-full">Projects</li>
                <li className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:w-full">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;
