import React from 'react'
import Image from 'next/image'
import Camprofile from './Camprofile'
import Profiles from './Profiles'
const Campsite = () => {
    
  return (
    <div className='campsite '>
            <div className='campsite-div' style={{backgroundImage: 'url(/img-1.png)'}}>
                <Camprofile/>
                <Profiles/>
            </div>
            <div className='campsite-div' style={{backgroundImage: 'url(/img-2.png)'}}>
                <Camprofile/>
                <Profiles/>
            </div>
            <div className='quote'>
              <p className='text-lg'><strong>Feeling Lost </strong> and Not Knowing The Way</p>
              <p className='text-sm'>Starting from the anxiety of the system, visible you are closer ot the possibility of getting lost is next . that's why from here you start the adventure</p>
              <Image
                src='/quote.svg'
                alt='quote'
                width={50}
                height={50}
                className='absolute bottom-2 right-2'
              />
            </div>
    </div>
  )
}

export default Campsite