import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Card, CardDescription } from "@/Components/ui/card";
import sliderImg from "../../../../assets/imig/sliderImg.png";
import { VdControlIcon } from "@/assets/icon/VdControlIcon";
import { Button } from "@/Components/ui/button";

export const BoxTwo = () => {
  return (
    <div className="pt-8 pl-4 pr-4 h-auto  text-white">
      <h2
        className="font-bold text-xl leading-[30px] tracking-[0%] text-center uppercase font-tektur text-[#F0D625] lg:font-[Tektur]
             lg:font-bold lg:text-[96px]  lg:leading-[100px] lg:tracking-[0%] lg:text-center lg:uppercase "
      >
        Авторские кусы от JustRobotics
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          430: {
            slidesPerView: 2,
            spaceBetween: 20,
            gap: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=" bg-black  gap-5 flex justify-center items-center swiper-container h-[400px] w-full"
      >
        <SwiperSlide className="   bg-black flex justify-center items-center    ">
          <Card
            className={
              "mt-8 flex flex-col border-none lg:pl-[50px]  bg-[#181818]  w-[284px] p-4 lg:w-[551px] lg:bg-[#F0D625] lg:h-[508px] lg:rotate-0 lg:rounded-[30px]  "
            }
          >
            <img
              className="w-auto  lg:w-[449px] lg:h-[211px] object-cover lg:rounded-[30px] lg:rotate-0"
              src={sliderImg}
              alt=""
            />
            <CardDescription
              className={
                "font-medium text-base leading-5 text-white font-inter pt-4 lg:hidden"
              }
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </CardDescription>
            <CardDescription
              className={
                " max-sm:hidden lg:font-['Tektur'] lg:justify-self-start lg:flex lg:pt-5 lg:font-bold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center lg:text-black"
              }
            >
              Робототехника
            </CardDescription>

            <Button className=" max-sm:hidden lg:bg-black lg:mt-[130px] lg:ml-[190px] lg:w-[261.05px] lg:h-[41.02px] lg:px-[19.52px] lg:py-[6.51px] lg:gap-[6.51px]  lg:rounded-[6509px] lg:rotate-0">
              Подробнее о кусе{" "}
            </Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center    ">
          <Card
            className={
              "mt-8 flex flex-col border-none lg:pl-[50px]  bg-[#181818]  w-[284px] p-4 lg:w-[551px] lg:bg-[#F0D625] lg:h-[508px] lg:rotate-0 lg:rounded-[30px]  "
            }
          >
            <img
              className="w-auto  lg:w-[449px] lg:h-[211px] object-cover lg:rounded-[30px] lg:rotate-0"
              src={sliderImg}
              alt=""
            />
            <CardDescription
              className={
                "font-medium text-base leading-5 text-white font-inter pt-4 lg:hidden"
              }
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </CardDescription>
            <CardDescription
              className={
                " max-sm:hidden lg:font-['Tektur'] lg:justify-self-start lg:flex lg:pt-5 lg:font-bold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center lg:text-black"
              }
            >
              Робототехника
            </CardDescription>

            <Button className=" max-sm:hidden lg:bg-black lg:mt-[130px] lg:ml-[190px] lg:w-[261.05px] lg:h-[41.02px] lg:px-[19.52px] lg:py-[6.51px] lg:gap-[6.51px]  lg:rounded-[6509px] lg:rotate-0">
              Подробнее о кусе{" "}
            </Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center    ">
          <Card
            className={
              "mt-8 flex flex-col border-none lg:pl-[50px]  bg-[#181818]  w-[284px] p-4 lg:w-[551px] lg:bg-[#F0D625] lg:h-[508px] lg:rotate-0 lg:rounded-[30px]  "
            }
          >
            <img
              className="w-auto  lg:w-[449px] lg:h-[211px] object-cover lg:rounded-[30px] lg:rotate-0"
              src={sliderImg}
              alt=""
            />
            <CardDescription
              className={
                "font-medium text-base leading-5 text-white font-inter pt-4 lg:hidden"
              }
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </CardDescription>
            <CardDescription
              className={
                " max-sm:hidden lg:font-['Tektur'] lg:justify-self-start lg:flex lg:pt-5 lg:font-bold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center lg:text-black"
              }
            >
              Робототехника
            </CardDescription>

            <Button className=" max-sm:hidden lg:bg-black lg:mt-[130px] lg:ml-[190px] lg:w-[261.05px] lg:h-[41.02px] lg:px-[19.52px] lg:py-[6.51px] lg:gap-[6.51px]  lg:rounded-[6509px] lg:rotate-0">
              Подробнее о кусе{" "}
            </Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center    ">
          <Card
            className={
              "mt-8 flex flex-col border-none lg:pl-[50px]  bg-[#181818]  w-[284px] p-4 lg:w-[551px] lg:bg-[#F0D625] lg:h-[508px] lg:rotate-0 lg:rounded-[30px]  "
            }
          >
            <img
              className="w-auto  lg:w-[449px] lg:h-[211px] object-cover lg:rounded-[30px] lg:rotate-0"
              src={sliderImg}
              alt=""
            />
            <CardDescription
              className={
                "font-medium text-base leading-5 text-white font-inter pt-4 lg:hidden"
              }
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </CardDescription>
            <CardDescription
              className={
                " max-sm:hidden lg:font-['Tektur'] lg:justify-self-start lg:flex lg:pt-5 lg:font-bold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center lg:text-black"
              }
            >
              Робототехника
            </CardDescription>

            <Button className=" max-sm:hidden lg:bg-black lg:mt-[130px] lg:ml-[190px] lg:w-[261.05px] lg:h-[41.02px] lg:px-[19.52px] lg:py-[6.51px] lg:gap-[6.51px]  lg:rounded-[6509px] lg:rotate-0">
              Подробнее о кусе{" "}
            </Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center    ">
          <Card
            className={
              "mt-8 flex flex-col border-none lg:pl-[50px]  bg-[#181818]  w-[284px] p-4 lg:w-[551px] lg:bg-[#F0D625] lg:h-[508px] lg:rotate-0 lg:rounded-[30px]  "
            }
          >
            <img
              className="w-auto  lg:w-[449px] lg:h-[211px] object-cover lg:rounded-[30px] lg:rotate-0"
              src={sliderImg}
              alt=""
            />
            <CardDescription
              className={
                "font-medium text-base leading-5 text-white font-inter pt-4 lg:hidden"
              }
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
            </CardDescription>
            <CardDescription
              className={
                " max-sm:hidden lg:font-['Tektur'] lg:justify-self-start lg:flex lg:pt-5 lg:font-bold lg:text-[40px] lg:leading-[42px] lg:tracking-[0%] lg:text-center lg:text-black"
              }
            >
              Робототехника
            </CardDescription>

            <Button className=" max-sm:hidden lg:bg-black lg:mt-[130px] lg:ml-[190px] lg:w-[261.05px] lg:h-[41.02px] lg:px-[19.52px] lg:py-[6.51px] lg:gap-[6.51px]  lg:rounded-[6509px] lg:rotate-0">
              Подробнее о кусе{" "}
            </Button>
          </Card>
        </SwiperSlide>
      </Swiper>

      <h2 className="font-bold text-xl leading-[30px] tracking-[0%] text-center uppercase font-tektur text-[#F0D625]">
        отзывы
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          430: {
            slidesPerView: 3,
            // spaceBetween: 20,
            gap: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className=" bg-black   flex justify-center items-center swiper-container h-[400px] w-full"
      >
        <SwiperSlide className="   bg-black flex justify-center items-center">
          <Card
            className={
              "mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4"
            }
          >
            <VdControlIcon className="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center">
          <Card
            className={
              "mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4"
            }
          >
            <VdControlIcon className="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center">
          <Card
            className={
              "mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4"
            }
          >
            <VdControlIcon className="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide className="   bg-black flex justify-center items-center">
          <Card
            className={
              "mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4"
            }
          >
            <VdControlIcon className="" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
