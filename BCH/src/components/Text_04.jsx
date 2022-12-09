import React from 'react'
import { ScrollLeft } from './global-components/ScrollLeft'
import Img from "./images/Hero.webp"

const Text_04 = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto my-56 font-link'>
      <ScrollLeft>
      <div className='flex md:flex-row flex-col justify-center items-center lg:max-w-screen-lg md:w-10/12 w-10/12 h-auto md:ml-16 sm:ml-12 ml-8'>

        <img className='lg:max-w-sm md:w-6/12 w-full' src={Img} alt="Img" />

        <div className='flex flex-col justify-center md:items-start items-center bg-slate-200 p-8 rounded-3xl text-gray-700 m-4'>
          <h1 className='lg:text-5xl md:text-left text-3xl text-center font-bold md:my-4 my-0  '>
            Hash Function
          </h1>

          <p className='md:my-0 my-4 text-xs md:text-left text-center w-full font-link02'>
            ハッシュ関数は一方向関数とも呼ばれ、あるデータからハッシュ値を生成することは簡単であるが、ハッシュ値から元データを生成することは不可能である。<br/>
            <span className='font-bold'><span className='text-base'>E</span>VE<span className='text-base text-blue-400'>N</span></span>
            では生体認証データとウォレットアドレスを組み合わせたデータのハッシュ値を計算し、それを照合用のデータとしてオンチェーンに保存している。保存したデータから生体認証データを生成することは不可能であり、プライバシーは保護されている。
          </p>

        </div>
      </div>
      </ScrollLeft>
    </div>
  )
}

export default Text_04