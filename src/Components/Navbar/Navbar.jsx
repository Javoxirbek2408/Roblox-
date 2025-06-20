import { Logo } from '@/assets/icon/Logo'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { NavbarLeftIcion } from '@/assets/icon/NavbarLeftIcion'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { NavLink } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export const Navbar = () => {
    return (
        <div className=' flex justify-between items-center w-[430px] p-2 border-b-10 border-t-10 border-yellow-300 px-4  text-white'>
            <div className='w-[70px] h-[55px] rounded-[50%] bg-yellow-300 flex justify-center items-center'>
                <Logo />
            </div>
            <div className='flex  gap-3 items-center  '>
                <Tabs className="w-[84px] ">
                    <TabsList className='bg-black '>
                        <TabsTrigger value="RU" className='bg-black text-yellow-300 font-normal text-2xl leading-[100%] tracking-[0%] text-center align-middle;
  font-invole'>RU</TabsTrigger>
                        <TabsTrigger value="UZ" className=' baground: transparent; text-yellow-300 font-normal text-2xl leading-[100%] tracking-[0%] text-center align-middle;
  font-invole'>UZ</TabsTrigger>
                    </TabsList>

                </Tabs>
                <Sheet className='h-full'>
                    <SheetTrigger className='h-full'>
                        <NavbarLeftIcion />
                    </SheetTrigger>
                    <SheetContent className={'bg-black  text-white w-full h-full p-4'}>
                        <ul>
                            <li><NavLink className={'font-normal text-2xl leading-[100%] '}>Главная</NavLink></li>
                            <li><NavLink>Главная</NavLink></li>
                            <Select className='border-none tewxt-[#F0D625]  '>
                                <SelectTrigger className="flex w-[100px] rounded-4xl border-2 items-center  gap-2 p-2 h-[30px] text-[#F0D625] border-yellow-300">
                                    <SelectValue placeholder="Курсы " className="font-normal tewxt-[#F0D625]   tewxt-[#F0D625] leading-[100%] " />
                                </SelectTrigger>
                                <SelectContent className={'bg-black text-[#F0D625] border-yellow-300'}>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
