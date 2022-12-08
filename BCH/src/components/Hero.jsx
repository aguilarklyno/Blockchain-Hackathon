import React from 'react'
import {Scroll} from './global-components/ScrollReveal'
import Img from "./images/Hero.webp"


const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto my-56'>
      <Scroll>
        <div className='flex md:flex-row-reverse flex-col justify-center items-center lg:max-w-screen-lg md:w-10/12 w-10/12 h-auto md:ml-16 sm:ml-12 ml-8'>
        <img className='lg:max-w-sm md:w-6/12 w-10/12' src={Img} alt="Img" />
        <div className='flex flex-col justify-center md:items-start items-center'>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-8  '>
            Produced by
            Team<br/>
            <span className='lg:text-7xl text-5xl text-gray-300'> GIN</span>
            <span className='lg:text-6xl text-4xl '>-TAMA</span>
          </h1>
          <p className='md:my-0 my-4 md:text-left text-center'>
            Start exploring blockchain applications in seconds. Trusted by over 30 million users worldwide.
          </p>
          <button className='bg-blue-400 w-44 md:p-2 p-3 m-4 rounded-full' type='button'>
            Download for <span className='font-bold bg-white text-blue-400 p-1 rounded-3xl'>YOU</span>
          </button>
        </div>
        </div>
      </Scroll>
    </div>
  )
}

export default Hero