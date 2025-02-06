import React from "react";

const Navbar = () => {
    return(
        <div className="w-screen flex justify-between h-[6vw] bg-[#62CBF9]">
            <div className="h-full text-white font-bold flex justify-start items-center ml-[4vw]">
                fahmiirfanfaiz.
            </div>
            <ul className="h-full text-white flex justify-end items-center cursor-pointer gap-x-[3vw] mr-[4vw]">
                <li>Home</li>
                <li>About</li>
                <li>Techstack</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;