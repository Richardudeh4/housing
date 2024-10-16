import * as React from "react"
import house1 from "@/public/assets/house1.svg";
import house2 from "@/public/assets/house2.svg";
import house3 from "@/public/assets/house3.svg";
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

const houseCarousel = [
    {type : "Apartment", image: house1, name: "Highett Common", location: "Abbotsford, Victoria" , price:"$ 700000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Office", image: house2, name: "Caulfield North", location: "Tusscany, Italy" , price:"$ 500000", bathRoom: "1-2", bedRoom: "1", packingSpace: "2"},
    {type : "Villa", image: house3, name: "Albero Apartments", location: "Monte carlo, France" , price:"$ 600000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Apartment", image: house1, name: "Highett Common", location: "St moritz, Switzerland" , price:"$ 450000", bathRoom: "1-4", bedRoom: "1-4", packingSpace: "1-3"},
    {type : "Apartment", image: house2, name: "Caulfield North", location: "Marbella , Spain" , price:"$ 400000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
  {type : "Office", image: house3, name: "Albero Apartments", location: "Lake como, Italy" , price:"$ 700000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
    {type : "Apartment", image: house1, name: "Highett Common", location: "Basel, Switzerland" , price:"$ 750000", bathRoom: "1-3", bedRoom: "1-3", packingSpace: "1-3"},
]
export function HouseCarousel() {
  return (
    <Carousel className="w-full mt-9">
      <CarouselContent className="-ml-1">
       {
        houseCarousel.map((item, i) => (
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
