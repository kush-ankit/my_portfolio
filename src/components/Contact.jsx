import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 '>Contact</p>
                <p>Submit the from below to get in touch with me</p>
            </div>

            <div>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name='name' placeholder='Enter your name here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" id="" cols="30" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact