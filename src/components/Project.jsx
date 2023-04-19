import React from 'react'
import Img1 from '../assets/propertyImg.png'

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quae accusantium commodi numquam quo eum porro quod expedita aliquid laborum?</p>
        <div className=' grid sm:grid-cols-2 gap-12'>
          <img className='rounded-2xl group-hover:opacity-10 shadow-2xl' src={Img1} alt="" />
          <img className='rounded-2xl group-hover:opacity-10 shadow-2xl' src={Img1} alt="" />
          <img className='rounded-2xl group-hover:opacity-10 shadow-2xl' src={Img1} alt="" />
          <img className='rounded-2xl group-hover:opacity-10 shadow-2xl' src={Img1} alt="" />
        </div>
    </div>
  )
}

export default Project