import React from 'react'
import Image from 'next/image'

const Camprofile = () => {
  return (
    <div className='flex flex-row gap-2 '>
        <div>
                    <Image
                        src='/folded-map.svg'
                        alt='map'
                        width={50}
                        height={50}
                        className='rounded-full bg-green-400 p-2'
                    />
                </div>
                <div className='flex flex-col gap-1 text-sm p-1'>
                    <p className='font-extrabold text-white'>Putuk Truno Camp</p>
                    <p className='text-white font-light'>Prigon, patsuruan</p>
                </div>
    </div>
  )
}

export default Camprofile