import React from 'react'
import Image from 'next/image'

const FeatureCards = () => {
    const array = [
        {'url':'/map.svg','title':'Real Maps Can Be Offline','desc':'we provide a blah balh bulus caompae adhde to make sure that you are safe the capbe usf sis sifn ens fsjs fjfj its it '},
        {'url':'/android.svg','title':'Real Maps Can Be Offline','desc':'we provide a blah balh bulus caompae adhde to make sure that you are safe the capbe usf sis sifn ens fsjs fjfj its it '},
        {'url':'/calendar.svg','title':'Real Maps Can Be Offline','desc':'we provide a blah balh bulus caompae adhde to make sure that you are safe the capbe usf sis sifn ens fsjs fjfj its it '},
        {'url':'/location.svg','title':'Real Maps Can Be Offline','desc':'we provide a blah balh bulus caompae adhde to make sure that you are safe the capbe usf sis sifn ens fsjs fjfj its it '}

    ]
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 '>
        {
            array.map((items,index) => (
                <div className='flex flex-col gap-4  w-80' key={index}>
                    <Image
                        src={items.url}
                        alt='calender'
                        width={60}
                        height={60}
                        className='p-4 bg-green-400 rounded-full'
                    />
                    <h1 className='font-bold text-lg'>{items.title}</h1>
                    <p className='text-gray-400'>
                        {items.desc}
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default FeatureCards