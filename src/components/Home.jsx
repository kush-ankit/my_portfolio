import React from 'react'
import photo from "../assets/img1.jpg";
import { BsArrowRightShort } from "react-icons/bs";

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
                <div className='w-full'>
                    <h2 className='text-4xl sm:text-7xl font-poppins '>I am a student of computer science.</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate alias voluptatem assumenda velit? Expedita maiores tempora est accusamus animi culpa assumenda praesentium ad soluta, ex repellendus iure necessitatibus unde deserunt?
                    </p>
                    <div className='center'>
                        <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
                            portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <BsArrowRightShort size={30} className="ml-1" />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={photo} alt="img" className='w-72 rounded-md mx-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Home;