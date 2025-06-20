import { Navbar } from '@/Components/Navbar'
import { Button } from '@/Components/ui/button'
import React from 'react'
import robot from '../../assets/imig/robot.png'
import { Card, CardDescription } from '@/Components/ui/card'
export const Header = () => {
    return (
        <div className='text-white'>
            <Navbar />
            <div className='flex justify-between p-4  items-center'>
                <div className='flex flex-col gap-2  bg-white p-4 rounded-4xl shadow-lg'>
                    <h1 className='font-semibold text-[32px] leading-[30px] font-tektur text-black '>JustRobotics</h1>
                    <h3 className='font-medium text-base leading-4 font-tektur text-black '>твой проводник <br /> ик в мир технологий <br /> и искусства</h3>
                    <p className='font-normal text-sm leading-4 font-invole text-black '>получите бесплатное <br />первое занятие</p>
                    <Button className={'font-bold text-sm leading-[10px] font-invole text-[#FFE001]'}>Перейти к курсам</Button>
                </div>
                <img src={robot} alt="" />
            </div>
            <div className='flex flex-wrap justify-center mt-8 gap-4 p-[6px]   lg:grid-cols-3'>
                <Card className={'bg-[#F0D625] w-[195px] items-cente0r border-none'}>
                    <CardDescription className={'font-extrabold text-xl text-black  leading-[100%] text-center font-tektur'}>300+</CardDescription>
                    <CardDescription className={'text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole'}>Довольных <br /> студентов</CardDescription>
                </Card>
                <Card className={'bg-[#F0D625] w-[195px] items-cente0r border-none'}>
                    <CardDescription className={'font-extrabold text-xl text-black  leading-[100%] text-center font-tektur'}>25+</CardDescription>
                    <CardDescription className={'text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole'}>Препадавателей</CardDescription>
                </Card>
                <Card className={'bg-[#F0D625] w-[195px] items-cente0r border-none'}>
                    <CardDescription className={'font-extrabold text-xl text-black  leading-[100%] text-center font-tektur'}>60+</CardDescription>
                    <CardDescription className={'text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole'}>Групп</CardDescription>
                </Card>

            </div>
        </div>
    )
}
