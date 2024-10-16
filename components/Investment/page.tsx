import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { HouseCarousel } from '../house-carousel'



const Investment = () => {
  return (
    <div>
        <div className='mt-9'>
            <div className='flex flex-col space-y-8'>
            <div className='flex flex-col  md:flex-row justify-between items-center '>
            <div className=''>
                <h1 className='uppercase text-2xl font-extrabold'>Investment apartments & Townhouses <br/>from across the nation </h1>
            </div>
            <Button asChild variant="ghost" size="lg">
              <Link href="/" className='text-sky-400 uppercase'>
             see all properties
              </Link>
            </Button>
            </div>
            </div>
           <HouseCarousel/>
        </div>
       
    </div>
  )
}

export default Investment