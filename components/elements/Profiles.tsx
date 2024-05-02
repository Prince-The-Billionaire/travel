import React from 'react'
import Image from 'next/image'

const Profiles = () => {
    const profiles:string[] = [
        '/person-1.png',
        '/person-2.png',
        '/person-3.png',
        '/person-4.png']
  return (
    <div className='flex gap-3 items-center'>
        <div className='flex -space-x-4 bottom-4 '>
            {
                profiles.map((items,index) => (
                    <div key={index}>
                        <Image
                            src={`${items}`}
                            alt='person'
                            width={30}
                            height={30}
                        />
                    </div>
                ))
            }
        </div>
        <p className='font-bold text-white'>50+ joined</p>
    </div>
  )
}

export default Profiles