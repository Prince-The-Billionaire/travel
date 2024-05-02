import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='heroSection'>
      <div className='hero-text-section'>
        <Image
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
        />
        <h1 className='hero-text'>Putuk Truno Camp Area</h1>
        <p className='hero-subtext'>We want to be on each of your journeys seeking the satisfaction of 
          seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>
        <div className='flex flex-row gap-2'>
          {Array(5).fill(1).map((_,index) => (
            <Image
            src='/star.svg'
            alt='star'
            width={20}
            height={20}
            key={index}
          />
          ))}
          <p className='font-bold '>198k <span className='text-gray-400 font-light underline'>Excellent reviews</span></p>
        </div>
        <div className='flex flex-row flex-wrap gap-5 pt-5'>
          <button className='download-app'>
            Download App
          </button>
          <div className='flex flex-row items-center gap-4'>
            <Image
              src='/play.svg'
              alt='play'
              width={30}
              height={30}
            />
            <p className='font-bold'>How we work?</p>
          </div>
        </div>
        
      </div>
      <div className='relative -z-10'>
      <Image
        src="/hero.png"
        alt='hero'
        width={500}
        height={402}
      />
      <div className='location'>
          <div className='flex flex-row gap-16'>
            <h1 className='location-text'>Location</h1>
            <Image
              src='/close.svg'
              alt='close'
              width={20}
              height={20}
            />
          </div>
  
          <p className='font-bold'>Aguas Calientes</p>

          <div className='flex flex-row gap-5'>
            <div>
              <h1 className='location-text'>Distance</h1>
              <p className='font-bold'>173.28 mi</p>
            </div>
            <div>
              <h1 className='location-text'>Elevation</h1>
              <p className='font-bold'>2.040 km</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero