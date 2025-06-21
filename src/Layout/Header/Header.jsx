import { Navbar } from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import React from "react";
import robot from "../../assets/imig/robot.png";
import robotDesk from "../../assets/imig/robotDesk.png";
import { Card, CardDescription } from "@/Components/ui/card";
export const Header = () => {
  return (
    <div className="relative z-10">
      <Navbar />
      <div className="text-white  header">
        <div className="flex containerr justify-between p-4 relative z-10 items-center lg:z-1000">
          <div className="flex flex-col gap-2  bg-white p-4 rounded-4xl shadow-lg lg:pl-[50px]  lg:w-[50%] lg:h-[300px] lg:justify-center lg:items-start lg:gap-4 lg:w-[651px] lg:h-[474px] ">
            <h1 className="font-semibold text-[32px] leading-[30px] font-tektur text-black lg:font-semibold lg:text-[84.35px] lg:leading-[100%] lg:tracking-[0%] lg:font-['Tektur']">
              JustRobotics
            </h1>
            <h3 className="font-medium text-base leading-4 font-tektur text-black  lg:font-medium lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:font-['Tektur']    ">
              твой проводник <br /> ик в мир технологий <br /> и искусства
            </h3>
            <p className="font-normal text-sm leading-4 font-invole text-black lg:font-normal lg:text-[20px] lg:leading-[100%] lg:tracking-[0%] lg:font-['Involve']">
              получите бесплатное первое занятие
            </p>
            <Button
              className={
                "font-bold cursor-pointer text-sm leading-[10px] font-invole text-[#FFE001]lg:absolute lg:w-[320px] lg:h-[62px] lg:top-[578.41px] lg:left-[113px] lg:rounded-[8px]           lg:font-['Involve'] lg:font-bold lg:text-[24px] lg:leading-[100%] lg:tracking-[0%] lg:uppercase  lg:text-[#FFE001] "
              }
            >
              Перейти к курсам
            </Button>
          </div>
          <img
            src={robot}
            alt=""
            className="lg:hidden "
          />
          <img
            src={robotDesk}
            alt=""
            className="absolute top-[0px] left-[60%]  w-[550px] max-sm:hidden"
          />
        </div>
        <div className="flex   flex-wrap justify-center mt-8 gap-4 p-[6px] relative z-10  lg:grid-cols-3">
          <Card
            className={
              "bg-[#F0D625] CardShadow w-[195px] items-cente0r border-none lg:w-[398px] lg:h-[369px] lg:rounded-[30px] lg:flex lg:pt-[70px]"
            }
          >
            <CardDescription
              className={
                "font-extrabold text-xl text-black  leading-[100%] text-center font-tektur lg:font-['Tektur'] lg:font-extrabold lg:text-[120px] lg:leading-[100%] lg:tracking-[0%] lg:text-center"
              }
            >
              300+
            </CardDescription>
            <CardDescription
              className={
                "text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole lg:font-['Involve'] lg:font-semibold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center"
              }
            >
              Довольных <br /> студентов
            </CardDescription>
          </Card>
          <Card
            className={
              "bg-[#F0D625] CardShadow w-[195px] items-cente0r border-none lg:w-[398px] lg:h-[369px] lg:rounded-[30px] lg:flex lg:pt-[70px]"
            }
          >
            <CardDescription
              className={
                "font-extrabold text-xl text-black  leading-[100%] text-center font-tektur lg:font-['Tektur'] lg:font-extrabold lg:text-[120px] lg:leading-[100%] lg:tracking-[0%] lg:text-center"
              }
            >
              25+
            </CardDescription>
            <CardDescription
              className={
                "text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole lg:font-['Involve'] lg:font-semibold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center"
              }
            >
              Преподавателей
            </CardDescription>
          </Card>
          <Card
            className={
              "bg-[#F0D625] CardShadow w-[195px] items-cente0r border-none lg:w-[398px] lg:h-[369px] lg:rounded-[30px] lg:flex lg:pt-[70px]"
            }
          >
            <CardDescription
              className={
                "font-extrabold text-xl text-black  leading-[100%] text-center font-tektur lg:font-['Tektur'] lg:font-extrabold lg:text-[120px] lg:leading-[100%] lg:tracking-[0%] lg:text-center"
              }
            >
              60+
            </CardDescription>
            <CardDescription
              className={
                "text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole lg:font-['Involve'] lg:font-semibold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center"
              }
            >
              групп
            </CardDescription>
          </Card>

          {/* <Card
            className={
              "bg-[#F0D625] CardShadow w-[195px] items-cente0r border-none"
            }
          >
            <CardDescription
              className={
                "font-extrabold text-xl text-black  leading-[100%] text-center font-tektur"
              }
            >
              25+
            </CardDescription>
            <CardDescription
              className={
                "text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole"
              }
            >
              Препадавателей
            </CardDescription>
          </Card>
          <Card
            className={
              "bg-[#F0D625] CardShadow w-[195px] items-cente0r border-none"
            }
          >
            <CardDescription
              className={
                "font-extrabold text-xl text-black  leading-[100%] text-center font-tektur"
              }
            >
              60+
            </CardDescription>
            <CardDescription
              className={
                "text-black font-semibold text-xs leading-[15px] tracking-[0%] text-center font-invole"
              }
            >
              Групп
            </CardDescription>
          </Card> */}
        </div>
      </div>
    </div>
  );
};
