import phomeIcon from '../../../../assets/icon/phomeIcon.svg'
import locotion from '../../../../assets/icon/locotioin.svg'
import soat from '../../../../assets/icon/soat.svg'
import { Button } from '@/Components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select'
import React from 'react'
import { NavLink } from 'react-router-dom'
export const BoxThere = () => {
  return (
    <div className='containerr relative z-10'>
      <h3 className=" text-[#F0D625] font-tektur font-bold text-2xl leading-[25px] tracking-[0%] text-center uppercase">
        получите бесплатный первый урок
      </h3>

      <form
        type="submit "
        className="max-sm:flex lg:mt-[80px] max-sm:flex-col items-center p-5 gap-4 lg:flex lg:justify-between "

      >
        <input
          className="w-[400px] cursor-pointer  pl-4 text-[ #00000066] h-[62px] bg-white  outline-0 lg:w-[230px]"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          className="w-[400px] cursor-pointer  pl-4 text-[ #00000066] h-[62px] bg-white  outline-0  lg:w-[230px]"
          type="tel"
          placeholder="Номер телефона"
        />
        <input
          className="w-[400px] cursor-pointer  pl-4 text-[ #00000066] h-[62px] bg-white  outline-0  lg:w-[230px]"
          type="text"
          placeholder="Возраст"
        />

        <Select className="border-none ">
          <SelectTrigger className="w-[400px] cursor-pointer lg:w-[230px] flex items-center justify-between p-5 h-[52px] border-none bg-white outline-0">
            <SelectValue placeholder="Выберете курс" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className={'cursor-pointer'} value="light">Light</SelectItem>
            <SelectItem className={'cursor-pointer'} value="dark">Dark</SelectItem>
            <SelectItem className={'cursor-pointer'} value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className={
            "w-[400px] btnShadow h-[62px] bg-[#FFE000] font-bold text-2xl leading-[100%] tracking-[0%] uppercase text-black  lg:w-[230px]"
          }
        >
          получить
        </Button>
      </form>
      <div className="max-sm:flex  items-center max-sm:justify-center gap-4 mt-5 lg:pl-[24px] lg:flex lg:justify-items-start">
        <Button className="bg-[#FFE000] cursor-pointer btnShadow text-black font-bold text-2xl leading-[100%] tracking-[0%] uppercase w-[200px] h-[62px]">
          Филиал Ц4
        </Button>
        <Button className="bg-white cursor-pointer text-black font-bold text-base leading-[100%] tracking-[0%] uppercase w-[200px] h-[62px]">
          Филиал Беруни
        </Button>
      </div>
      <div className="max-sm:flex items-center mb-18  max-sm:justify-between p-4 gap-4 mt-18 lg:pl-[24px] lg:flex lg:gap-[156px] lg:justify-center">
        <NavLink className={"flex items-center gap-2 lg:gap-4"}>
          <img className='w-9' src={phomeIcon} alt="" />
          <p className=" font-normal text-[10px] leading-[100%] font-invole text-white lg:font-[Involve] lg:font-normal lg:text-[24px] lg:leading-[100%] lg:tracking-[0px]">
            Орьентир
          </p>
        </NavLink>
        <NavLink className={"flex items-center gap-2 lg:gap-4"}>
          <img className='w-9' src={locotion} alt="" />
          <p className=" font-normal text-[10px] leading-[100%] font-invole text-white lg:font-[Involve] lg:font-normal lg:text-[24px] lg:leading-[100%] lg:tracking-[0px] ">
            Орьентир
          </p>
        </NavLink>
        <NavLink className={"flex items-center gap-2 lg:gap-4"}>
          <img className='w-9' src={soat} alt="" />
          <p className=" font-normal text-[10px] leading-[100%] font-invole text-white lg:font-[Involve] lg:font-normal lg:text-[24px] lg:leading-[100%] lg:tracking-[0px] ">
            Орьентир
          </p>
        </NavLink>
      </div>
    </div>
  );
}
