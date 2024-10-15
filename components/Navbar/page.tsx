"use client";
import { Search } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'


const MenuItem = [
    {title: "Development", href: "/Development"},
    {title: "Property News", href: "/PropertyNews"},
    {title: "Industry Profiles", href: "/IndustryProfiles"},
]
const Navbar = () => {
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const activateSearch = () => {
        setSearchActive(true);
    }
  return (
    <div className='my-4 overflow-hidden'>
       <div className='flex flex-row justify-between items-center'>
    {/* logo */}
    <div>
        <Link href="/">
        Logo
        </Link>
    </div>
    {/* menu */}
    <div className='flex flex-row space-x-6'>
    {
        MenuItem.map((item,i) => (
            <Link key={i} href={item.href} >
            {item.title}
            </Link>
        ))
    }
    </div>
    {/* search and contact button */}
    <div className='flex flex-row justify-between items-center space-x-4'>
    {/* search icon */}
    <div onClick={activateSearch}>
    {
        searchActive ? (
        <Input  type="text" placeholder='Search for your next home'/>
        ): <Search size={24} />
    }
    </div>
    <Link href="/contactUs">
    <Button className='rounded-[40px]' asChild>
        <h1 className='text-white'>Contact Us</h1>
    </Button>
    </Link>
    </div>
       </div>
    </div>
  )
}

export default Navbar