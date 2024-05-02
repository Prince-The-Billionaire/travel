import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <div className='guide'>
      <div>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />
        <p className='text-green-400'>WE ARE HERE FOR YOU</p>
      </div>
      <h1 className='font-bold text-5xl'>Guide You to Easy Path</h1>
      <p className='text-gray-400'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps
        when there is no internet connection in the field. invite your friends, relatives and friends to have fun in the 
        wilderness through the valley and reach the top of the mountain
         </p>
      <div className='relative object-contain  text-white' >
        <Image
          src="/boat.png"
          alt='boat'
          width={1000}
          height={300}
        />
        <div className='meter'>
          <Image
            src="/meter.svg"
            alt='meter'
            width={20}
            height={20}
            className=''
          />
          <div className='flex flex-col justify-between'>
            <div className='flex flex-row  gap-6 '>
              <p className='location-text'>Destination</p>
              <p className='text-green-400'>48 min</p>
            </div>
            <p className='font-bold'>Aguas Calientes</p>
            <p className='location-text'>Start track</p>
            <p className='font-bold'>Wonorejo Pasuruan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide