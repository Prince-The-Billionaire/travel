import React from 'react'
import Image from 'next/image'

const GetApp = () => {
  return (
    <div className='bg-black text-white mt-20 p-10 flex flex-row justify-center items-center gap-6 max-md:flex-wrap' style={{backgroundImage:'url(/hero-bg.png)'}}>
      <div className='flex flex-col gap-5'>
        <h1 className='hero-text'>Get for free now!</h1>
        <p>Available on ios and android</p>
        <button className='flex  flex-row rounded-2xl w-full justify-center p-2 gap-4 items-center text-green-400 text-sm bg-white'>
          <Image 
            src="/apple.svg"
            alt="apple"
            width={25}
            height={25}
          />
          App store
        </button>
        <button className='flex flex-row rounded-2xl w-full justify-center p-2 gap-4 items-center bg-transparent border border-gray-400  text-sm text-white'>
          <Image 
            src="/android.svg"
            alt="apple"
            width={25}
            height={25}
          />
          Play store
        </button>
      </div>
      <Image
        src='/phones.png'
        alt='phones'
        width={400}
        height={300}
      />
    </div>
  )
}

export default GetApp