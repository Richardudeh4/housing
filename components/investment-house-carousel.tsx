import * as React from "react"
import invest1 from "@/public/assets/invest1.svg";
import invest2 from "@/public/assets/invest2.svg";
import invest3 from "@/public/assets/invest3.svg";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "@/components/ui/carousel"
import Image from "next/image";
import { Button } from "./ui/button";
import { BathIcon, Bed, Car, Download,  VerifiedIcon } from "lucide-react";
import Link from "next/link";

const investHouseCarousel = [
    {type : "Apartment", image: invest1, name: "Highett Common", location: "Abbotsford, Victoria" , price:"$ 700000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Office", image: invest2, name: "Caulfield North", location: "Tusscany, Italy" , price:"$ 500000", bathRoom: "1-2", bedRoom: "1", packingSpace: "2"},
    {type : "Villa", image: invest3, name: "Albero Apartments", location: "Monte carlo, France" , price:"$ 600000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Apartment", image: invest1, name: "Highett Common", location: "St moritz, Switzerland" , price:"$ 450000", bathRoom: "1-4", bedRoom: "1-4", packingSpace: "1-3"},
    {type : "Apartment", image: invest2, name: "Caulfield North", location: "Marbella , Spain" , price:"$ 400000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Office", image: invest3, name: "Albero Apartments", location: "Lake como, Italy" , price:"$ 700000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Apartment", image: invest1, name: "Highett Common", location: "Basel, Switzerland" , price:"$ 750000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
]

const roomType = [
  {href:"/", title: "1 Bedroom"},
  {href:"/", title: "2 bedrooms"},
  {href:"/", title: "3 bedrooms"},
  {href:"/", title: "4 bedrooms"}
]

const InvestmentHouseCarousel = () => {
  return (
    <Carousel  className="w-full  relative py-10">
      <div className="">
      <div className=' flex  py-3 flex-row justify-between items-center'>
                <div className='flex flex-row space-x-5 items-center'>
                    {
                        roomType.map((items, i) => (
                           <Button size="little" asChild key={i} className=''>
                            <Link href="/" className='text-black uppercase'>
                           {items.title}
                            </Link>
                           </Button>
                        ))
                    }
                </div>
                <div className='md:w-[30%] space-x-3 flex justify-end'>
                <CarouselPrevious />
                <CarouselNext />
                </div>
            </div>  
      
      </div>
     
      <CarouselContent className="-ml-1">
       {
        investHouseCarousel.map((item, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="relative">
                    <Image src={item.image} alt="house image" />
                    <Button className="absolute top-4 left-4" size="lg" variant="light"  asChild>
                        <h1 className="uppercase text-[18px]">{item.type}</h1>
                    </Button>
                    </div>
                </CardContent>
                <div className="flex flex-col p-6 pt-0 space-y-3">
                    <div className="flex flex-row space-x-2 items-center">
                    <h1 className="text-[22px]">{item.name}</h1>
                    <VerifiedIcon size={22}/>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                    <h1 className="text-slate-400">{item.location}</h1>
                    <h1 className="text-slate-400"> from {item.price}</h1>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                    <div className="border-t border-b p-3 flex flex-row space-x-4 border-slate-300">
                        <div className="space-x-2 flex flex-row items-center pr-2 border-r border-slate-300">
                            <Bed size={22}/>
                           <h1>{item.bedRoom}</h1> 
                         </div>
                        <div className="space-x-2 flex flex-row items-center pr-2 border-r border-slate-300">
                            <BathIcon size={22}/>
                           <h1>{item.bathRoom}</h1> 
                        </div>
                        <div className="space-x-2 flex flex-row items-center">
                            <Car size={22}/>
                           <h1>{item.packingSpace}</h1> 
                        </div>
                    </div>
                    <div>
                        <Button variant="light" asChild className="">
                            <div className="flex flex-row space-x-1 items-center">
                            <h1 className="uppercase text-[14px] text-black">Brochure</h1>
                            <Download size={22}/>
                            </div>
                        </Button>
                    </div>
                    </div>
                   
                </div>
               
              </Card> 
            </div>
          </CarouselItem>
        ))
       }
      </CarouselContent>
     
    </Carousel>
  )
}

export default InvestmentHouseCarousel