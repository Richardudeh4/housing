import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { HouseCarousel } from '../house-carousel'

const investMenu = [
    {href:"/", title: "all"},
    {href:"/", title: "vic"},
    {href:"/", title: "qld"},
    {href:"/", title: "nsw"},
    {href:"/", title: "act"},
    {href:"/", title: "sa"},
]
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
            <div className='mt-6'>
                <div className='flex flex-row space-x-5 items-center'>
                    {
                        investMenu.map((item, i) => (
                           <Button size="little" asChild key={i} className=''>
                            <Link href="/" className='text-black uppercase'>
                           {item.title}
                            </Link>
                           </Button>
                        ))
                    }
                </div>
            </div>
            <HouseCarousel/>
        </div>
       
    </div>
  )
}

export default Investment