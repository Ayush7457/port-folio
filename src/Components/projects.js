import React from "react";
import image from "./download.png"
export default class projects extends React.Component{
    render(){
        return(
            <div className=" mt-5 text-gray-400">
            <h1 className="text-center  text-3xl underline md:text-5xl">PROjECTS</h1>
           <div className="text-center flex gap-4 mt-10 justify-center flex-wrap  ">
            <div className=" border-2 border-slate-200 rounded-xl">
            <img src={image} alt="no preview"className="rounded-xl w-36 md:w-60"/>
            <h1 className>Lorem ipsum </h1>
            </div>
            <div className=" border-2 border-slate-200 rounded-xl ">
            <img src={image} alt="no preview" className="rounded-xl  w-36 md:w-60" />
            <h1>Lorem ipsum </h1>
            </div>
            <div className=" border-2 border-slate-200 rounded-xl ">
            <img src={image} alt="no preview" className="rounded-xl w-36 md:w-60"/>
            <h1>Lorem ipsum </h1>
            </div>
            </div>
            </div>
        )
    }
}