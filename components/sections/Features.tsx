import React from 'react'
import Image from 'next/image'
import FeatureCards from '../elements/FeatureCards'

const Features = () => {
  return (
    <div className='overflow-hidden pt-16 flex flex-col items-center gap-6 max-md:p-2' style={{backgroundImage:'url(/feature-bg.png)'}}>
      <div className=''>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />
        <h1 className='hero-text mb-10'>Our Features</h1>
      </div>
      <div className='flex flex-row gap-16 '>
        <Image
          src='/phone.png'
          alt='phone'
          width={200}
          height={400}
          className='rotate-[30deg] max-md:hidden'
        />
        <FeatureCards/>
      </div>
    </div>
  )
}

export default Features