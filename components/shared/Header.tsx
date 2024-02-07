import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className='w-full border-b'>
      <div className=' wrapper flex justify-between items-center'>
        <Link href="/" className='w-36'>
          <Image 
            src="assets/images/logo.svg"
            alt='Evently logo'
            width={128}
            height={38}
          />
        </Link>

        <nav className='md:flex-between hidden w-full max-w-xs'>
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size="lg">
              <Link href="/sign-in">Login</Link>
            </Button> 
           </SignedOut>
        </div>
      </div>

    </header>
  )
}

export default Header
