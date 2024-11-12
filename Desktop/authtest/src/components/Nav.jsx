import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import companyLogo from '@/assets/images/company-logo.svg';
import SignIn from './SignIn';
const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 bg-gradient-to-r from-indigo-500 justify-center items-center p-4'>
        <Link href= "/" className='flex gap-2 flex-center' >
            <Image src={companyLogo}
                width={30}
                alt='cat logo'
                height={30}
                className='object-contain'

            />
            <p className='logo_text'>Clawsome Fitness</p>
        </Link>

        <form>
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 '
            type='submit' name='action' value='google'>
                Sign in with Google
            </button>
        </form>
        <SignIn/>

    </nav>
  )
}

export default Nav
