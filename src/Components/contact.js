import React from 'react';

export default class contact extends React.Component{
    render(){
        return(
            <div className='mt-6 text-gray-400  md:mt-10 pb-6 md:pb-10'>
                <h1 className='text-center text-3xl underline md:text-5xl'>CONTACT ME</h1>
                <form action='https://formspree.io/f/xyyqbvyz' method='POST' className=" border-2 border-slate-600  p-5 rounded-xl mx-6  flex flex-col gap-3 mt-6 md:gap-6 md:mx-52">
                    <input type='text' name='username' placeholder='Username' required autoComplete='off' className=' border-2 rounded-lg border-slate-600 placeholder:text-center placeholder: bg-transparent md:p-1 '/>
                    <input type='email' name='Email' placeholder='Email' required autoComplete='off' className='border-2 rounded-lg border-slate-600 placeholder:text-center placeholder: bg-transparent md:p-1'/>
                    <textarea name="message" cols="30" rows="6" placeholder='Enter your Message' autoComplete='off' required className='border-2 rounded-lg border-slate-600 placeholder:text-center placeholder: bg-transparent'/>
                    <input type="submit" value="Send Message"className='border-2  border-slate-600 cursor-pointer rounded-xl   ease-in-out duration-300 hover:bg-slate-600 md:p-2'/>
                </form>
            </div>
        )
    }
}
