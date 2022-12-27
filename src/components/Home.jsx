import React from 'react'
import photo from "../assets/img1.png";

function Home() {
    return (
        <div name="Home" className='h-screen w-full'>
            <div className='h-28'></div>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
                <div className='w-full'>
                    <h2 className='text-4xl sm:text-7xl font-poppins font-bold '>Hello guys,<br />My name is Ankit Kushwaha</h2>
                    <p className='py-4 max-w-md'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate alias voluptatem assumenda velit? Expedita maiores tempora est accusamus animi culpa assumenda praesentium ad soluta, ex repellendus iure necessitatibus unde deserunt?
                    </p>
                    
                </div>
                <div className='mt-5'>
                    <img src={photo} alt="img" className='w-72 rounded-md mx-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Home;