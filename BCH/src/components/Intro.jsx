import React from 'react'
import { Scroll } from './global-components/ScrollReveal'
import { Scroll02 } from './global-components/ScrollReveal02'
import { Scroll03 } from './global-components/ScrollReveal03'
import Browse from "./images/Browse.svg"
import Explore from "./images/Explore.svg"
import wallet from "./images/wallet.svg"

const Intro = () => {
  return (
      <div className='flex justify-center items-center w-full h-auto my-56 font-link'>

        <div className='flex lg:flex-nowrap flex-wrap md:flex-row-reverse flex-col justify-center items-center lg:max-w-screen-lg w-10/12 h-auto md:ml-0 sm:ml-8 ml-0'>
        <Scroll03>
        <div className='flex flex-col justify-between items-center lg:mx-1 mx-4 my-12 p-4 lg:w-64 md:w-64 sm:w-56 w-44 lg:h-80 md:h-80 h-auto bg-white rounded-2xl'>
     
            <img className='inline-block' src={Browse} alt="Browse"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N </span>
              </span>
              enable <br/>安全な個人情報管理
            </p>
        </div>
        </Scroll03>
        <Scroll02>
        <div className='flex flex-col justify-between items-center lg:mx-1 mx-4 my-12 p-4 lg:w-64 md:w-64 sm:w-56 w-44 lg:h-80 md:h-80 h-auto bg-white rounded-2xl'>
            <img className='inline-block' src={Explore} alt="Explore"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N </span>
              </span>
              enable <br/>スムーズな取引
            </p>
        </div>
        </Scroll02>
        <Scroll>
        <div className='flex flex-col justify-between items-center lg:mx-1 mx-4 my-12 p-4 lg:w-64 md:w-64 sm:w-56 w-44 lg:h-80 md:h-80 h-auto bg-white rounded-2xl'>
            <img className='inline-block' src={wallet} alt="wallet"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N </span>
              </span>
              enable <br/>アドレスの非匿名化
            </p>
        </div>
        </Scroll>
        </div>
      </div>
  )
}

export default Intro