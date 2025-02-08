import React from "react";
import { useState, useEffect } from "react";


const About = () => {
    return(
        <div className="flex flex-row justify-center w-screen gap-[5vw] mt-8"> 
            <div>
                Hi! I'am Fahmi Irfan Faiz
            </div>
            <div className="w-40 h-40"> 
                <img src="/images/personal-profile-photo.jpeg" alt="personal-profile-photo" />
            </div>
        </div>
    )
}

export default About;