"use client";

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

  // Using pathname to determine which menu is active
  const pathName = usePathname()

  return (
    <div>
      <ul className='flex flex-col items-start gap-5 w-full md:flex-row ms:flex-between'>
        { headerLinks.map((link) => {
          // Var to determine which menu is currently active
          const isActive = pathName === link.route;
          
          return (
            <li key={ link.route }
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}>
              <Link href={ link.route }>{ link.label }</Link>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default NavItems