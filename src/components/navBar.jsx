import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';



const NavBar = () => {
    const [Nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "Resume"
        },
    ]
    const [isClicked, changeColor] = useState(true)

    const styles = {

        change: {
            backgroundColor: isClicked ? "#ccc" : "",


        }
    }


    useEffect(() => {
        const onScroll = () => changeColor(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => changeColor(current => !current);
    }, []);



    return (
        <div style={styles.change} id='change' className="flex flex-row justify-between p-5 fixed w-full items-center bg-opacity-30 ">

            <div className="text-5xl text-gray-700 font-bold font-Caveat underline underline-offset-4 mx-3">
                Ankit
            </div>
            <ul className="hidden text-gray-700 md:flex flex-row justify-between   ">
                {
                    links.map(({ id, link }) => (
                        <li key={id} className="px-5 cursor-pointer ">
                            {link}
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!Nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-400 '>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {Nav && (
                <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 text-4xl p-3 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className="px-4 py-6 cursor-pointer ">
                                {link}
                            </li>
                        ))

                    }
                </ul>
            )}
        </div>
    )
}

export default NavBar