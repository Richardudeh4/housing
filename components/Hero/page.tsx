import React from 'react'
import { Input } from '../ui/input'
import { Filter, Search, SlidersHorizontal } from 'lucide-react'

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
            <h1 className='text-slate-400 text-[18px]'>Frequently searched suburb</h1>

        </div>
      </div>
    </div> 
    )
}

export default Hero