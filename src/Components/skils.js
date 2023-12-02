import React from "react";
import html from "./html.png"
import css from "./CSS.png"
import javascript from "./javascript.png"
import react from "./React.png"

export default class skils extends React.Component{
    render(){
        return(
            <div className="mt-6  text-gray-400 md:mt-10">
            <h1 className="text-center  text-3xl underline md:text-5xl">SKILLS</h1>
            <div className="flex flex-wrap gap-5 justify-center mt-6 md:mt-10 md:gap-8">
               
              <a href="https://en.wikipedia.org/wiki/HTML">  <img src={html} alt="HTML logo" className="w-36   border-2 border-slate-200 bg-gradient-to-t from-slate-900 via-slate-900 to-orange-600 p-4 rounded-xl  md:w-60 "/></a>
              <a href="https://en.wikipedia.org/wiki/CSS"> <img src ={css} alt="CSS logo" className="w-36  border-2 border-slate-200 bg-gradient-to-t from-current via-stone-200 to-sky-600 p-4 rounded-xl   md:w-60 "/></a> 
              <a href="https://www.javascript.com/">  <img src={javascript} alt="Javascript logo" className="w-36 border-2 border-slate-200 bg-gradient-to-t from-current via-stone-200 to-yellow-300 p-4 rounded-xl  md:w-60"/></a>
             <a href="https://react.dev/"> <img src={react} alt="React logo" className="w-36 rounded-xl border-2 border-slate-200 bg-gradient-to-t from-black via-cyan-900 to-black p-4 md:w-60"/></a>
                
            </div>
            </div>
        )
    }
}

