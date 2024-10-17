import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import megaProject from "@/public/assets/megaProject.svg";
const MegaProject = () => {
  return (
    <div className='bg-white py-8'>
        <div className='w-full relative'>
            <div className='flex items-center'>
            <div className='px-5 py-4 flex flex-col gap-8 bg-blue-800 border z-[9999px] right-[60%] bottom-[15%] absolute border-black'>
            <div className=''>
                <h1 className='text-white font-extrabold uppercase text-[25px]'>About Us</h1>
                <p className='text-white leading-5 py-3 '>At Reality real estate, We are more than just a real estate estate company - We are your trusted partner in making your property dreamsa reality . Wheather you are buying, selling, renting or investing , We offer professional guidance and personalized services to match your unique needs</p>
                <Button variant="light" asChild size="lg" className='mt-4 cursor-pointer'>
                    <h1 className='uppercase text-white'>see all properties</h1>
                </Button>
            </div>
            </div>
            <div className='w-[80%]'>
            <Image src={megaProject} alt="about us image"/>
            </div>
          
            </div>
            
        </div>
    </div>
  )
}

export default MegaProject