import React from 'react';
import image from "./heroImage.png"
import {BiLogoLinkedin,BiLogoGithub,BiLogoInstagram} from 'react-icons/bi'

const NavBar = () => {

        return (
            <section className=' min-h-screen pt-10 p-5 md:p-10'>
                <h1 className='ml-2 mb-4 md:ml-[12px] px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start text-white text-3xl font-bold'>A</h1>
            <nav className='flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'>

                <ul className='flex  flex-row md:flex-col space-x-0 pr-10 mb-5 mt-2 md:mt-0'>
                    <li className='pr-4 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500 '>
                        <a className='md:pb-4' href="#">Home</a>
                    </li>
                    <li className='pr-4 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500'>
                        <a className='md:pb-4' href="#">About</a>
                    </li>
                    <li className='pr-4 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500'>
                        <a className='md:pb-4' href="#">Experience</a>
                    </li>
                    <li>
                        <a className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500' href="#">Resume</a>
                    </li>
                </ul>
            </nav>
            <div name="Home" className=' max-w-screen-lg max-auto flex flex-col items-start h-full text-white pl-4 pt-5'>
        
            <h1 className=' font-semibold text-3xl'>Ayush Paul</h1>
            <h2 className='pt-5 md: max-w-xl pb-6'>I have worked for multiple companies and clients that's how I developed my skills and knowledge through my previous experiences by actively learning and reflecting on them.</h2>
            </div>

            <div className='pl-3.5 pb-8'>
                <div className='flex relative grayscale-[100%] bg-black rounded-full w-40 h-40 overflow-hidden '>
                <img src={image} layout="fill" objectfi className="App-logo fill object-cover layout fill-current" alt="logo"/>
                </div>
            </div>

            <div name='socials' className=' text-neutral-500 pl-3  space-y-3' >
                <div className='flex text-center' >
                <BiLogoLinkedin className='text-2xl'/>
                <a className='pl-2 cursor-pointer' href="https://www.linkedin.com/in/ayushpaul1111/">ayushpaul1111</a>
                </div>

                <div className='flex text-center'>
                <BiLogoGithub className='text-2xl'/>
                <a className='pl-2 cursor-pointer' href="https://github.com/Ayushpaul111">Ayushpaul1111</a>
                </div>

                <div className='flex text-center'>
                <BiLogoInstagram className='text-2xl'/>
                <a className='pl-2 cursor-pointer' href="https://www.linkedin.com/in/ayushpaul1111/">ayushpaul111</a>
                </div>
            </div>
            <div className=' max-w-screen-lg max-auto flex flex-col items-start h-full text-white pl-4 pt-5'>
                <h3 className='pt-5 md: max-w-xl pb-6'>
                I'm a Next.js contributor and help lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js, and web development. I'm an advisor and investor in early stage startups.
                </h3>
            </div>
            </section>
  );

};

export default NavBar

