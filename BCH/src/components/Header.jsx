import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"


const Header = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full h-20 bg-black'>
        <div className='flex justify-between items-center h-14 w-10/12'>
          
          <h1 className='text-4xl font-bold '>
            EVE<span className='text-5xl text-blue-400 font-bold'>N</span>
          </h1>

{/* --------------------------lg:ナビゲーションボタン----------------------------- */}
          <div className='lg:hidden'>
            <AiOutlineMenu size={30}/>
          </div>



{/* --------------------------lg:ナビゲーションバー----------------------------- */}
          <nav className='lg:flex items-center hidden'>
            <ul className='block'>
              <li className='inline-block p-3'>Features</li>
              <li className='inline-block p-3'>Support</li>
              <li className='inline-block p-3'>About</li>
              <li className='inline-block p-3'>Build</li>
              <li className='inline-block p-3'>Douwnload</li>
            </ul>
            <button type="button" className='h-8 px-8 bg-gray-100 rounded-full text-black'>
            Style
            </button>
          </nav>


        </div>
      </div>
    </>
  )
}

export default Header