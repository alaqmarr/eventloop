"use client";
import { headerLinks } from '@/constants'
import { link } from 'fs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathName = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col gap-5 items-start md:flex-row'>
        {headerLinks.map((link) =>{
            const isActive = pathName === link.route;
            return(
                <li
                key={link.route}
                className={isActive?'text-primary':''}>
                    <Link href={link.route}>
                        {link.label}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems