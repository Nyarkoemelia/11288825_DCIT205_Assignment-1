'use client'

import { Icons } from '@/components/Icons'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, Loader2 } from 'lucide-react'

import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Navbar from './Navbar'



const Page = () => {
 
  
  return (
    <>
          <Navbar/>
          <MaxWidthWrapper>

          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tight'>
            Select Instructor
            </h1>

          </div>

          <div className='grid gap-6'>
            <form onSubmit={()=>{}}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Contacts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Kofi Annan || kofi@gmail.com</SelectItem>
                    <SelectItem value="dark">Christian Abrokwa || christian@gmail.com</SelectItem>
                    <SelectItem value="system">Dennis Nsiah || dennis@gmail.com</SelectItem>
                  </SelectContent>
                </Select>
                </div>


                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea rows={12} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


                <Button >
                  Send
                </Button>
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
          </MaxWidthWrapper>
  
    </>
  )
}

export default Page