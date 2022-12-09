import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full flex justify-center items-center font-link'>
      <div className='w-8/12 m-8'>

        <h1 className='text-4xl font-bold m-4'>
          <span className='text-5xl font-bold'>E</span>
          VE
          <span className='text-5xl text-blue-400 font-bold'>N</span>
        </h1>

          <div className='flex md:flex-row flex-col justify-center md:items-start items-center'>

            <div  className='lg:w-1/4 w-11/12 lg:m-4 m-2 '>
              <h1 className='text-blue-400 m-1 lg:text-lg text-base font-bold'>
                LEARN MORE
              </h1>
              <ul className=''>
                <li className='p-1 lg:text-base text-sm'>About</li>
                <li className='p-1 lg:text-base text-sm'>Developers Docs</li>
                <li className='p-1 lg:text-base text-sm'>Download</li>
                <li className='p-1 lg:text-base text-sm'>Documentation</li>
                <li className='p-1 lg:text-base text-sm'>EVEN Institutional</li>
                <li className='p-1 lg:text-base text-sm'>Security</li>
              </ul>
            </div>

            <div  className='lg:w-1/4 w-11/12 lg:m-4 m-2'>
              <h1 className='text-blue-400 m-1 lg:text-lg text-base font-bold'>
                GET INVOLVED
              </h1>
              <ul className=''>
                <li className='p-1 lg:text-base text-sm'>GitHub</li>
                <li className='p-1 lg:text-base text-sm'>Gitcoin</li>
                <li className='p-1 lg:text-base text-sm'>Open Positions</li>
                <li className='p-1 lg:text-base text-sm'>Swag Shop</li>
                <li className='p-1 lg:text-base text-sm'>Press & Partenerships</li>
              </ul>
            </div>

            <div  className='lg:w-1/4 w-11/12 lg:m-4 m-2'>
              <h1 className='text-blue-400 m-1 lg:text-lg text-base font-bold'>
                CONNECT
              </h1>
              <ul className=''>
                <li className='p-1 lg:text-base text-sm'>FAQs</li>
                <li className='p-1 lg:text-base text-sm'>Support</li>
                <li className='p-1 lg:text-base text-sm'>News</li>
                <li className='p-1 lg:text-base text-sm'>Twitter</li>
              </ul>
            </div>

            <div  className='lg:w-1/4 w-11/12 lg:m-4 m-2'>
              <h1 className='text-blue-400 m-1 lg:text-lg text-base font-bold'>
                LEGAL
              </h1>
              <ul className=''>
                <li className='p-1 lg:text-base text-sm'>Privacy Policy</li>
                <li className='p-1 lg:text-base text-sm'>Terms of Use</li>
                <li className='p-1 lg:text-base text-sm'>Contributor License Agreement</li>
                <li className='p-1 lg:text-base text-sm'>Site Map</li>
              </ul>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Footer