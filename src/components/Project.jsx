import React from 'react'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"


function Project() {
  return (
    <div className='h-screen w-full  flex flex-row justify-center items-center text-white '>
      <div className='w-full flex flex-row justify-evenly items-center'>
        <div className='w-1/3 p-5 ' >
          <img src={proj1} alt="proj1" className='' />
          <h2 className='font-bold text-center text-2xl'>Quiz Portal</h2>
        </div>
        <div className='w-1/3 p-5'>
          <img src={proj2} alt="proj1" className='' />
          <h2 className='font-bold text-center text-2xl'>Mobile App</h2>
        </div>
      </div>
    </div>
  )
}

export default Project