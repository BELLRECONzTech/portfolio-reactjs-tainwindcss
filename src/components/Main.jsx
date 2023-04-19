import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter , FaFacebookF ,FaInstagram ,FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.pexels.com/photos/346808/pexels-photo-346808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-2xl text-gray-900 '>Hi There !</h1>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Bell Theeraphat</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-900'>
                    I'm a !        
                <TypeAnimation
                    sequence={[
                'Front-End Developer', // Types 'One'
                1000, // Waits 1s
                'Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Learning & Challenger', // Types 'Three' without deleting 'Two'
                'New Attitude For Leaning More',
                2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block' }}
                />
                </h2>
                <div className='flex justify-between pl-6 max-w-[200px] w-full pt-4'>
                    <FaTwitter className='cursor-pointer' size = {20} />
                    <FaFacebookF className='cursor-pointer' size = {20} />
                    <FaInstagram className='cursor-pointer' size = {20}/>
                    <FaLinkedinIn className='cursor-pointer' size = {20}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main