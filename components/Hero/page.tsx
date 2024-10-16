import React from 'react'
import { Input } from '../ui/input'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '../ui/button'

const freqMenu = [
  {href: "/", title: "Melbourne"},
  {href: "/", title: "Gold coast"},
  {href: "/", title: "Brisbane"},
  {href: "/", title: "Newcastle"},
  {href: "/", title: "Sydney"},
]
const Hero = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-6 pt-36 justify-center items-center'>
        <h1 className='text-transform uppercase font-extrabold leading-[60px] text-6xl text-center'>The home of new <br/> property developments</h1>
        <p className='text-[25px] text-slate-400'>Find and build your dream home within a second</p>
        {/* beginning of the search component */}
        <div className=''>
            <div className='w-full flex flex-row space-x-6 items-center mt-8 bg-slate-300 border-1 border-black rounded-[25px]'>
            <Input placeholder='Search by suburb or development' className=' border-none'/>
            <SlidersHorizontal size={26} />
            <div className='px-2 py-2 border-1 bg-sky-300 rounded-[50%]'>
            <Search size={25} />
            </div>
            </div>      
        </div>
        {/* end of the search component */}
        {/* frequenctly searched suburb */}
        <div className='flex flex-col space-y-4'>
            <h1 className='text-slate-400 text-[18px] text-center'>Frequently searched suburb</h1>
            <div className='pt-4 flex flex-row space-x-6 items-center'>
              {
                freqMenu.map((item,i) => (
                  <Button key={i} className='rounded-[25px]' asChild>
                    <h1 className='text-black'>{item.title}</h1>
                  </Button>
                ))
              }
            </div>
        </div>
        {/* end of frequency searched suburb */}
        <div className='w-full mt-12'>
          <video src='/assets/house.mp4' muted loop autoPlay/>
        </div>
      </div>
    </div> 
    )
}

export default Hero