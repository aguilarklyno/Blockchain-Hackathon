import React from 'react'
import Img from "./images/Hero.webp"

const Title = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto'>
      <div className='flex md:flex-row-reverse flex-col justify-center items-center lg:max-w-screen-lg md:w-10/12 w-11/12 h-auto m-8'>

        <img className='lg:max-w-sm md:w-6/12 w-full' src={Img} alt="Img" />

        <div className='flex flex-col justify-center md:items-start items-center'>
          <h1 className='lg:text-8xl md:text-left text-3xl text-center font-bold md:my-4 my-8  '>
            EVE<span className='lg:text-9xl text-4xl text-blue-400'>N</span>.
          </h1>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-8  '>
            The thing, which will make a new world. 
            {/* EVE<span className='lg:text-6xl text-4xl text-blue-400'>N</span> */}
          </h1>

        </div>
      </div>
    </div>
  )
}

export default Title