import React from 'react'
import { Scroll } from './global-components/ScrollReveal'
import Img from "./images/Hero.webp"

const Text_02 = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto my-56'>
      <Scroll>
      <div className='flex md:flex-row flex-col justify-between items-center lg:max-w-screen-lg md:w-10/12 w-10/12 h-auto md:ml-16 sm:ml-12 ml-8'>

        <img className='lg:max-w-sm md:w-6/12 w-full' src={Img} alt="Img" />

        <div className='flex flex-col justify-center md:items-start items-center bg-slate-200 p-8 rounded-3xl text-gray-700 m-4'>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-0  '>
            Feature 1
          </h1>

          <p className='md:my-0 my-4 text-xs md:text-left text-center w-full'>
            誰もが平等に評価される世界を目指し、そして実現をするためにTeam GINTAMA は 
            <span className='font-bold'><span className='text-base'>E</span>VE<span className='text-base text-blue-400'>N</span></span>
            を作りました。<br className='md:inline hidden'/>
            <span className='font-bold'><span className='text-base'>E</span>VE<span className='text-base text-blue-400'>N</span></span>
            がある世界では無駄な努力なんてありません。全ての努力に意味があるのです。さぁ新しい世界へ飛び込みましょう！！<br/>
          </p>

        </div>
      </div>
      </Scroll>
    </div>
  )
}

export default Text_02