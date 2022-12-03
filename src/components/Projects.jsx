import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

function Project() {
  return (
    <div className=' flex justify-center h-screen w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600'>
      <div>
        <button className='group border border-gray-400 shadow-md  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
          portfolio
          <span className='group-hover:rotate-90 duration-300'>
            <BsArrowRightShort size={30} className="ml-1" />
          </span>
        </button>
      </div>
    </div>
  )
}



export default Project