import { Logo } from "@/assets/icon/Logo";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { NavbarLeftIcion } from "@/assets/icon/NavbarLeftIcion";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-[430px] p-2 border-b-10 border-t-10 border-yellow-300 px-4  text-white lg:w-[100%] lg:justify-between lg:px-8 lg:gap-4 lg:h-[80px]">
      <div className="w-[70px] h-[55px] rounded-[50%] bg-yellow-300 flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex  gap-3 items-center  ">
        <Tabs className="w-[84px] ">
          <TabsList className="bg-black ">
            <TabsTrigger
              value="RU"
              className="bg-black text-yellow-300 font-normal text-2xl leading-[100%] tracking-[0%] text-center align-middle font-invole"
            >
              RU
            </TabsTrigger>
            <TabsTrigger
              value="UZ"
              className=" baground: transparent; text-yellow-300 font-normal text-2xl leading-[100%] tracking-[0%] text-center align-middle font-invole"
            >
              UZ
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Sheet className="h-full">
          <SheetTrigger className="h-full ">
            <NavbarLeftIcion  />
          </SheetTrigger>
          <SheetContent className={"bg-black  text-white w-full h-full p-4 "}>
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink className={"font-normal text-2xl leading-[100%] "}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink className={"font-normal text-2xl leading-[100%] "}>
                  о нас
                </NavLink>
              </li>
              <Select className="border-none tewxt-[#F0D625]  ">
                <SelectTrigger className="flex w-[100px] rounded-4xl border-2 items-center  gap-2 p-2 h-[30px] text-[#F0D625] border-yellow-300">
                  <SelectValue
                    placeholder="Курсы "
                    className="font-normal tewxt-[#F0D625]   tewxt-[#F0D625] leading-[100%] "
                  />
                </SelectTrigger>
                <SelectContent
                  className={"bg-black text-[#F0D625] border-yellow-300"}
                >
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <li>
                <NavLink className={"font-normal text-2xl leading-[100%] "}>
                  Контакты
                </NavLink>
              </li>
            </ul>
            <Button
              className={
                "btnShadow font-bold text-2xl leading-[100%] tracking-[0%] uppercase font-tektur  w-[248px] h-[62px] rounded-[7px] bg-[#FFE000] text-black mt-4"
              }
            >
              Позвонить
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
