import React from 'react'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"


function Project() {
  return (
    <div name="Project" className='h-screen w-full flex flex-col justify-evenly items-center'>
      <h1 className='center font-bold text-3xl underline'>Projects</h1>
      <div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-1/3 p-5 ' >
          <img src={proj1} alt="proj1" className='' />
          <h2 className='font-bold text-center text-2xl'>Quiz Portal</h2>
        </div>
        <div className='w-full md:w-1/3 p-5'>
          <img src={proj2} alt="proj1" className='' />
          <h2 className='font-bold text-center text-2xl'>Mobile App</h2>
        </div>
      </div>
    </div>
  )
}

export default Project