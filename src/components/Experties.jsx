import React from 'react'

function Experties() {
    return (
        <div className='h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 flex flex-col justify-between items-center'>
            <div className='h-2/3 max-w-screen-lg '>
                <h1 className='text-5xl underline m-5'>Experties</h1>
                <div className='grid grid-rows-2 grid-flow-col gap-20'>
                    <img className='h-52 w-52 p-5 hover:animate-ping duration-500' src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="node" />
                    <img className='h-52 w-52 p-5 hover:animate-bounce duration-500' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="node" />
                    <img className='h-52 w-52 p-5 hover:rotate-6 duration-500' src="https://nodejs.org/static/images/logo.svg" alt="node" />
                    <img className='h-52 w-52 p-5 hover:animate-spin duration-100' src="https://www.obg.eu.com/img/technologies/react.png" alt="node" />
                    <img className='h-52 w-52 p-5 hover:rotate-6 duration-500' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="node" />
                    <img className='h-52 w-52 p-5 hover:animate-pulse duration-500' src="https://img.icons8.com/color/480/c-programming.png" alt="node" />
                </div>
            </div>
        </div>
    )
}
export default Experties