import React from "react";
import { useState, useEffect, useRef } from 'react';
// import './App.css';

const Navbar = () => {
    return(
        <div className="w-screen flex justify-between h-[6vw] bg-[#62CBF9]">
            <div className="h-full font-poppins font-bold text-[#005F73] flex justify-start items-center ml-[4vw]">
                fahmiirfan <span className="text-[#E3F2FD]">faiz.</span> 
            </div>
            <ul className="h-full text-white font-montserrat flex justify-end items-center cursor-pointer gap-x-[3vw] mr-[4vw]">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;