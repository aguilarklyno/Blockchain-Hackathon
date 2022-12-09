import React from 'react'
import { Scroll } from './global-components/ScrollReveal'
import Img from "./images/Hero.webp"

const Title = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto my-56 font-link'>
      <Scroll>
      <div className='flex md:flex-row-reverse flex-col justify-center items-center lg:max-w-screen-lg md:w-10/12 w-10/12 h-auto md:ml-16 sm:ml-12 ml-8'>

        <img className='lg:max-w-sm md:w-6/12 w-full' src={Img} alt="Img" />

        <div className='flex flex-col justify-center md:items-start items-center'>
          <h1 className='lg:text-8xl md:text-left text-5xl text-center font-bold md:my-4 my-0  '>
          <span className='lg:text-9xl text-6xl text-blue-400'>E</span>VE<span className='lg:text-9xl text-6xl text-blue-400'>N</span>.
          </h1>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-8  '>
            The thing, which will take you to the 
            <span className='font-bold'><span className='lg:text-6xl text-4xl'> E</span>VE<span className='lg:text-6xl text-4xl text-blue-400'>N </span></span>
            world. 
            {/* EVE<span className='lg:text-6xl text-4xl text-blue-400'>N</span> */}
          </h1>

        </div>
      </div></Scroll>
    </div>
  )
}

export default Title