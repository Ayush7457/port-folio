import React from "react";
export default class navbar extends React.Component{
    render(){
        return(
            <div className=' text-gray-300 text-center  flex flex-col  md:flex-row md:px-52 justify-between md:items-baseline sm:flex-row'>
            <h1 className='text-3xl '>AYUSH PARMAR.</h1>
            <ul className='mt-4 px-10 justify-evenly flex gap-6 items-baseline md:justify-normal md:mt-0 md:px-0' >
                <li className="cursor-pointer"><a href='#'>HOME</a></li>
                <li className="cursor-pointer"><a href='#'>ABOUT</a></li>
                <li className="cursor-pointer"><a href='#'>PROJECTS</a></li>
                <li className="cursor-pointer"><a href='#'>SKILLS</a></li>
                <li className="cursor-pointer"><a href='#'>CONTACT</a></li>
            </ul>
        </div>
        )
    }
}