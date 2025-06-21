import { Instagram } from '@/assets/icon/Instagram'
import { Logo } from '@/assets/icon/Logo'
import { Teligram } from '@/assets/icon/Teligram'
import { Twitter } from '@/assets/icon/twitter'
import { Youtube } from '@/assets/icon/Youtube'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-[#FFE000] relative z-10 lg:pt-[40px] lg:pl-[80px] lg:mt-[80px] text-white lg:h-[298px]  p-5 max-sm:flex max-sm:items-center max-sm:flex-col lg:flex lg:w-full  lg:justify-self-start lg:gap-[140px] lg:relative '>

      <div className='max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full max-w-[1200px] mb-10 lg:flex lg:flex-col lg:gap-4 '>
        <div className='w-[70px] bg-gray-300 cursor-pointer h-[70px] rounded-full flex items-center justify-center'>
          <Logo />
        </div>
        <div>
          <p className=' font-bold text-sm leading-[22px] font-inter text-black '>SLOGAN lLorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
          <div className='flex cursor-pointer items-center gap-3 mt-3'>
            <Teligram />
            <Youtube />
            <Instagram />
            <Twitter />
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className='max-sm:flex mb-[30px] max-sm:items-start max-sm:flex-col max-sm:w-full max-w-[1200px] gap-10 lg:flex  lg:gap-[140px]  '>
        <ul>
          <h3 className='font-bold text-[26px] pb-2 leading-[100%] font-invole text-black'>Курсы</h3>
          <li className='flex flex-col gap-3'>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Работотехника</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Английский для взрослых</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Английский для детей</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Шахмат</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Живопись</NavLink>
          </li>
        </ul>

        <ul>
          <h3 className='font-bold pb-2 text-[26px] leading-[100%] font-invole text-black'>Контакты</h3>
          <li className='flex flex-col gap-3'>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Телеграм</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Инстаграм</NavLink>
            <NavLink className={'font-normal text-xl leading-[100%] text-black '}>Ютюб</NavLink>
          </li>
        </ul>
      </div>
      <NavLink className={'flex justify-center mt-6  font-semibold text-sm leading-[100%] text-black font-invole lg:flex lg:absolute lg  lg:top-[250px]'}>Ideallux.com © 2000-2024, All Rights Reserved</NavLink>
    </div>
  )
}
