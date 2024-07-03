'use client';

import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { useParams, usePathname } from 'next/navigation'
import path from 'path'

const Sidebar = ({user} : SiderbarProps) => {
    const pathname = usePathname()

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
       <Link href={'/'} className=' flex mb-12 items-center cursor-pointer gap-2'>
       <Image src='/icons/logo.svg' alt='Horizon logo'
       width={34}
       height={34}
       className='size-[50px]'/>
       <h1 className='sidebar-logo'>Horizon</h1>
       </Link>

      {sidebarLinks.map((item)=>{
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
          <Link href={item.route} key={item.label}
          className={cn('sidebar-link', {'bg-bankGradient': isActive})}> 
          <div className='relative size-6'>
            <Image src={item.imgURL}
            alt={item.label}
            width={30}
            height={30}
            className={cn({
              'brightness-[3] invert-0': isActive
            })}/>
          </div>
          {/*cn is dynamic class package*/}
          <p className={cn(
            'sidebar-label', {
              '!text-white': isActive
          })}>{item.label}</p>
          </Link>
        )
      })}


    
        USER
      </nav>


      FOOTER

    </section>
  )
}

export default Sidebar