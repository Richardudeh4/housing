import Link from 'next/link'
import React from 'react'


const MenuItem = [
    {title: "Development", href: "/Development"},
    {title: "Property News", href: "/PropertyNews"},
    {title: "Industry Profiles", href: "/IndustryProfiles"},
]
const Navbar = () => {
  return (
    <div className='my-4'>
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
    <div className='flex space-x-4'>
    {/* search icon */}

    </div>
       </div>
    </div>
  )
}

export default Navbar