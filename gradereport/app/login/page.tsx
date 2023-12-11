'use client'

import { Icons } from '@/components/Icons'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Navbar from './Navbar'


const Page = () => {
 
  
  return (
    <>
      <Navbar/>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Log in to your gradeReport
              account
            </h1>

          </div>

          <div className='grid gap-6'>
            <form onSubmit={()=>{}}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Student ID</Label>
                  <Input
                 
                    className=
                      'focus-visible:ring-red-500'
                      
                    placeholder='10835820'
                  />
                 </div>

                <div className='grid gap-4 py-2'>
                  <Label htmlFor='password'>PIN</Label>
                  <Input
                    type='password'
                    className='focus-visible:ring-red-500'
                    placeholder='PIN'
                  />
                
                <div > 
                <Button className='my-8'>
                  Log in
                </Button>
                </div>

                </div>

 
              </div>
            </form>

            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Page