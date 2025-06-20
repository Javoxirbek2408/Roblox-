import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { Card, CardDescription } from '@/Components/ui/card';
import sliderImg from '../../../../assets/imig/sliderImg.png'
import { VdControlIcon } from '@/assets/icon/VdControlIcon';

export const BoxTwo = () => {
    return (
        <div className='pt-8 pl-4 pr-4  text-white'>
            <h2 className='font-bold text-xl leading-[30px] tracking-[0%] text-center uppercase font-tektur text-[#F0D625]'>Авторские кусы от JustRobotics</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    430: {
                        slidesPerView: 2,
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
                className=" bg-black  gap-5 flex justify-center items-center swiper-container h-[400px] w-full"
            >
                <SwiperSlide className='   bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex flex-col border-none  bg-[#181818]  w-[284px] p-4'}>
                        <img className='w-auto' src={sliderImg} alt="" />
                        <CardDescription className={'font-medium text-base leading-5 text-white font-inter pt-4'}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</CardDescription>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className=' bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex flex-col border-none  bg-[#181818]  w-[284px] p-4'}>
                        <img className='w-auto' src={sliderImg} alt="" />
                        <CardDescription className={'font-medium text-base leading-5 text-white font-inter pt-4'}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</CardDescription>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className=' bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex flex-col border-none  bg-[#181818]  w-[284px] p-4'}>
                        <img className='w-auto' src={sliderImg} alt="" />
                        <CardDescription className={'font-medium text-base leading-5 text-white font-inter pt-4'}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</CardDescription>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className=' bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex flex-col border-none  bg-[#181818]  w-[284px] p-4'}>
                        <img className='w-auto' src={sliderImg} alt="" />
                        <CardDescription className={'font-medium text-base leading-5 text-white font-inter pt-4'}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</CardDescription>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className=' bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex flex-col border-none  bg-[#181818]  w-[284px] p-4'}>
                        <img className='w-auto' src={sliderImg} alt="" />
                        <CardDescription className={'font-medium text-base leading-5 text-white font-inter pt-4'}>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit</CardDescription>
                    </Card>
                </SwiperSlide>

            </Swiper>

            <h2 className='font-bold text-xl leading-[30px] tracking-[0%] text-center uppercase font-tektur text-[#F0D625]'>отзывы</h2>

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
                <SwiperSlide className='   bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4'}>
                        <VdControlIcon className="" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='   bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4'}>
                        <VdControlIcon className="" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='   bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4'}>
                        <VdControlIcon className="" />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='   bg-black flex justify-center items-center'>
                    <Card className={'mt-8 flex items-center justify-center border-none   bg-gray-400  w-[220px] h-[310px] p-4'}>
                        <VdControlIcon className="" />
                    </Card>
                </SwiperSlide>
              

            </Swiper>

        </div>
    )
}
