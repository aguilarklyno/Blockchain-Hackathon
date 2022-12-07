import React from 'react'
import Img from "./images/Hero.webp"

const Text_01 = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto'>
      <div className='flex md:flex-row-reverse flex-col justify-center items-center md:w-10/12 w-11/12 h-auto m-8'>

        <img className='lg:max-w-sm md:w-6/12 w-full' src={Img} alt="Img" />

        <div className='flex flex-col justify-center md:items-start items-center'>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-8  '>
            Why we made EVE<span className='lg:text-6xl text-4xl text-blue-400'>N</span>
          </h1>

          <p className='md:my-0 my-4 text-sm md:text-left text-center'>
            誰もが平等に評価される世界を目指し、そして実現をするためにTeam GINTAMA は 
            <span className='font-bold'>EVE<span className='text-base text-blue-400'>N</span></span> を作りました。
          </p>

        </div>

      </div>
    </div>
  )
}

export default Text_01