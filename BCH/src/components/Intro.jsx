import React from 'react'
import Browse from "./images/Browse.svg"
import Explore from "./images/Explore.svg"
import wallet from "./images/wallet.svg"

const Intro = () => {
  return (
      <div className='flex justify-center items-center w-full h-auto'>
        <div className='flex md:flex-row flex-col flex-wrap justify-center items-center lg:max-w-screen-xl md:w-10/12 w-11/12 h-auto m-8'>
  
          <div className='flex flex-col justify-between items-center m-4 p-4 sm:w-64 w-3/4 sm:h-80 h-auto bg-white rounded-2xl'>
            <img className='inline-block' src={Browse} alt="Browse"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N</span>
              </span>
              があれば、<br/>世界の人々と繋がれる
            </p>
          </div>

          <div className='flex flex-col justify-between items-center m-4 p-4 sm:w-64 w-3/4 sm:h-80 h-auto bg-white rounded-2xl'>
            <img className='inline-block' src={Explore} alt="Explore"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N</span>
              </span>
              があれば、<br/>スムーズな取引ができる
            </p>
          </div>

          <div className='flex flex-col justify-between items-center m-4 p-4 sm:w-64 w-3/4 sm:h-80 h-auto bg-white rounded-2xl'>
            <img className='inline-block' src={wallet} alt="wallet"/>
            <p className='text-gray-700'>
              <span className='font-bold text-xl'>
                <span className='text-2xl'>E</span>
                VE
                <span className='text-2xl text-blue-400'>N</span>
              </span>
              があれば、<br/>安全に個人情報を管理
            </p>
          </div>

        </div>
      </div>
  )
}

export default Intro