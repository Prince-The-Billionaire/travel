import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link href={"/"}>
            <Image
                src="/hilink-logo.svg"
                alt='logo'
                width={100}
                height={50}
            />
        </Link>
        <div className='navbar-links'>
            <Link href={'/'}><p className='navtext'>Home</p></Link>
            <Link href={'/'}><p className='navtext'>How Hilink works</p></Link>
            <Link href={'/'}><p className='navtext'>Services</p></Link>
            <Link href={'/'}><p className='navtext'>Pricing</p></Link>
            <Link href={'/'}><p className='navtext'>Contact Us</p></Link>
            <Link href={'/'}>
                <button className='navbutton'>
                    <Image
                        src="/user.svg"
                        alt='user'
                        width={25}
                        height={25}
                    />
                    Login
                </button>
            </Link>
        </div>
        <Image
            src='/menu.svg'
            alt='menu'
            width={40}
            height={40}
            className='menu'
        />
    </div>
  )
}

export default Navbar