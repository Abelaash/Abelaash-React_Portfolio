import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        {/* LOGO */}
        <div>
            <img src={Logo} alt="my logo" style={{width:'50px'}} />
        </div>
        {/* MENU */}
        
            <ul className='hidden md:flex '>
                <a href="/home"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/skills"><li>Skills</li></a>
                <a href="/project"><li>Portfolio</li></a>
                <a href="/education"><li>Education</li></a>
                <a href="/experience"><li>Work</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul>
        
        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <a href="/home"><li className='py-6 text-4xl'>Home</li></a>
                <a href="/about"><li className='py-6 text-4xl'>About</li></a>
                <a href="/skills"><li className='py-6 text-4xl'>Skills</li></a>
                <a href="/project"><li className='py-6 text-4xl'>Portfolio</li></a>
                <a href="/education"><li className='py-6 text-4xl'>Education</li></a>
                <a href="/experience"><li className='py-6 text-4xl'>Work</li></a>
                <a href="/contact"><li className='py-6 text-4xl'>Contact</li></a>
            </ul>
        

        {/* SOCIAL ICONS */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className="flex justify-between items-center w-full text-gray-300" href='/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className="flex justify-between items-center w-full text-gray-300" href='/'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                    <a className="flex justify-between items-center w-full text-gray-300" href='/'>
                        Email <SiGmail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                    <a className="flex justify-between items-center w-full text-gray-300" href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar