import { Instagram } from '@/assets/icon/Instagram'
import { Logo } from '@/assets/icon/Logo'
import { Teligram } from '@/assets/icon/Teligram'
import { Twitter } from '@/assets/icon/twitter'
import { Youtube } from '@/assets/icon/Youtube'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-[#FFE000] h-[596px] text-white p-5 flex items-center flex-col'>
      <div className='flex items-center justify-between w-full max-w-[1200px] mb-10'>
        <div className='w-[70px] bg-gray-300 h-[70px] rounded-full flex items-center justify-center'>
          <Logo />
        </div>
        <div>
          <p className=' font-bold text-sm leading-[22px] font-inter text-black '>SLOGAN lLorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
          <div className='flex items-center gap-3 mt-3'>
            <Teligram />
            <Youtube />
            <Instagram />
            <Twitter />
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className='flex mb-[30px] items-start flex-col w-full max-w-[1200px] gap-10'>
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
      <NavLink className={'flex justify-center mt-6  font-semibold text-sm leading-[100%] text-black font-invole'}>Ideallux.com © 2000-2024, All Rights Reserved</NavLink>
    </div>
  )
}
