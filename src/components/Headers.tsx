'use client'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn } from 'next-auth/react'
import { Session } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type HeaderProps = {
  session: Session | null
}

const Header: React.FC<HeaderProps> = ({ session }) => {
  return (
    <header className='border-b p-4 flex items-center justify-between'>
      <Link
         href={'/'}
         className='text-blue-600 font-bold text-2xl'>
            Marketplace
      </Link>
      <nav className='flex gap-4 *:rounded *:px-2 '>
            <Link href={'/new'} className='border border-blue-600 text-blue-600 inline-flex gap-1 items-center px-4 mr-4'>
                <FontAwesomeIcon icon={faPlus} className='h-4'/>
                <span> Post Product</span>
            </Link>
           {!session?.user ? (
            <>
              <span className='border-r'></span>
              <button className='border-0 text-gray-600'>Sign Up</button>
              <button 
                  onClick={() => signIn('google')}
                  className='bg-blue-600 text-white border-0 px-6'>
                  Login
              </button>
            </>
           ) : (
            <Link href={'/account'} className=''>
                <Image 
                   className='rounded-md'
                   src={session.user.image as string} 
                   alt={'avatar'} 
                   width={36} 
                   height={36} />
            </Link>
           )}
      </nav>
    </header>
  )
}

export default Header
