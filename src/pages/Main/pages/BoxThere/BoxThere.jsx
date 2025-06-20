import phomeIcon from '../../../../assets/icon/phomeIcon.svg'
import locotion from '../../../../assets/icon/locotioin.svg'
import soat from '../../../../assets/icon/soat.svg'
import { Button } from '@/Components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import React from 'react'
import { NavLink } from 'react-router-dom'
export const BoxThere = () => {
    return (
        <div>
            <h3 className=' text-[#F0D625] font-tektur font-bold text-2xl leading-[25px] tracking-[0%] text-center uppercase'>получите бесплатный первый урок</h3>


            <form type='submit ' className='flex flex-col items-center p-5 gap-4  ' action="">
                <input className='w-[400px] pl-4 text-[ #00000066] h-[62px] bg-white  outline-0' type="text" placeholder='Ваше имя' />
                <input className='w-[400px] pl-4 text-[ #00000066] h-[62px] bg-white  outline-0' type="tel" placeholder='Номер телефона' />
                <input className='w-[400px] pl-4 text-[ #00000066] h-[62px] bg-white  outline-0' type="text" placeholder='Возраст' />

                <Select className='border-none'>
                    <SelectTrigger className="w-[400px] flex items-center justify-between p-5 h-[52px] border-none bg-white outline-0">
                        <SelectValue placeholder="Выберете курс" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Button type='submit' className={'w-[400px] h-[62px] bg-[#FFE000] font-bold text-2xl leading-[100%] tracking-[0%] uppercase text-black'}>получить</Button>
            </form>
            <div className='flex items-center justify-center gap-4 mt-5'>
                <Button className='bg-[#FFE000] text-black font-bold text-2xl leading-[100%] tracking-[0%] uppercase w-[200px] h-[62px]'>Филиал Ц4</Button>
                <Button className='bg-white text-black font-bold text-base leading-[100%] tracking-[0%] uppercase w-[200px] h-[62px]'> Филиал Беруни</Button>
            </div>
            <div className='flex items-center  justify-between p-4 gap-4 mt-5'>
                <NavLink className={'flex items-center gap-2'}>
                    <img src={phomeIcon} alt="" /> <p className=' font-normal text-[10px] leading-[100%] font-invole text-white'>Орьентир</p>
                </NavLink>
                <NavLink className={'flex items-center gap-2'}>
                    <img src={locotion} alt="" /> <p className=' font-normal text-[10px] leading-[100%] font-invole text-white'>Орьентир</p>
                </NavLink>
                <NavLink className={'flex items-center gap-2'}>
                    <img src={soat} alt="" /> <p className=' font-normal text-[10px] leading-[100%] font-invole text-white'>Орьентир</p>
                </NavLink>
            </div>
        </div >
    )
}
