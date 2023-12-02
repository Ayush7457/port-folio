import React from "react";
import {BsFacebook} from 'react-icons/bs';
import {SlSocialInstagram} from "react-icons/sl";
import {SlSocialLinkedin} from "react-icons/sl";
import {SlSocialGithub} from "react-icons/sl"
import Image from "./Heroimage.jpg"
export default class home extends React.Component{
    render(){
        return(
            <div className=" text-gray-400 my-8 flex items-center justify-center flex-col gap-4 md:flex-row md:my-36   ">
            <div className="border border-gray-400 rounded-3xl m-8 md:m-0">
            <img src={Image} alt="React Image" className="p-4 filter grayscale w-68 rounded-3xl" />
            </div>
            <div className="text-center md:text-left">
                <h1 className="text-2xl">HELLO EVERYONE</h1>
                <h1 className="text-3xl">I AM AYUSH PARMAR </h1>
                <h1 className="text-3xl">FRONT-END DEVELOPER | SOFTWARE DEVELOPER</h1>
                <div className=" mt-4 flex gap-3 justify-center md:justify-start">
                <a href="https://www.facebook.com/ayush.rautela.71/" target="blank" className="text-4xl"><BsFacebook/></a>
                <a href="https://www.instagram.com/ayush_rautela1/" target="_blank" className="text-4xl"><SlSocialInstagram/></a>
                <a href="https://www.linkedin.com/in/ayush-parmar-9965aa23a/" target="_blank" className="text-4xl"><SlSocialLinkedin/></a>
                <a href="https://github.com/Ayush7457" target="_blank" className="text-4xl"><SlSocialGithub/></a>
                </div>
                <button className="border mt-8 rounded-md px-4 p-1 border-slate-500 md:mt-4">RESUME</button>
        
            </div>
            </div>
        )
    }
}