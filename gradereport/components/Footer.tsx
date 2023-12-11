'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'

const Footer = () => {
  

  return (
    <footer className='bg-white flex-grow-0'>
      <MaxWidthWrapper>


        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='./contact'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Instructor Contact
              </Link>
              <Link
                href='./support'
                className='text-sm text-muted-foreground hover:text-gray-600'>
                Help and Support Page
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer