import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import InvestmentHouseCarousel from '../investment-house-carousel'

const AustralianInvestment = () => {
  return (
    <div>
        <div className='mt-9'>
            <div className='flex flex-col space-y-8'>
            <div className='flex flex-col  md:flex-row justify-between items-center '>
            <div className=''>
                <h1 className='uppercase text-3xl font-extrabold'>Australian's best investment property <br/>deals </h1>
            </div>
            <Button asChild variant="ghost" size="lg">
              <Link href="/" className='text-sky-400 uppercase'>
             see all properties
              </Link>
            </Button>
            </div>
            </div>
           <InvestmentHouseCarousel/>
        </div>
       
    </div>
  )
}

export default AustralianInvestment