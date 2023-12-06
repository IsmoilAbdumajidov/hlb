import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    url: "https://bir.uz/files/bir.uz/images/partners/1.png",
    title: "O'zbekiston Savdo-sanoat palatasi"
  },
  {

    url: "https://bir.uz/files/bir.uz/images/partners/2.png",
    title: "Toshkent davlat iqtisodiyot universiteti"
  },
  {
    url: "https://bir.uz/img/bir.uz/uploads/logo32.png",
    title: "Toshkent moliya instituti"
  },
  {
    url: "https://bir.uz/files/bir.uz/images/partners/4.png",
    title: "“Norma” professional rivojlanish markazi"
  },
]

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const OurPartners = () => {
  return (
    <div className='pt-20 pb-32'>
      <div className="main-container">
        <div className='my-20 text-center relative w-full md:w-[600px] m-auto'>
          <div className='absolute w-36 h-1 -top-5 left-[50%] -translate-x-[50%] bg-[#ff663b]'></div>
          <h1 className='text-bg text-3xl pb-3 sm:text-4xl md:text-5xl font-semibold '>Bizning hamkorlarimiz</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt ab vitae velit. Beatae, consequatur ab in quasi non minima!</p>
        </div>
      </div>
      <div className='bg_liner py-10'>
        <div className="main-container">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              789: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,

              },
            }}
            autoplay={{
              delay: 2500,
              // disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {
              data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='flex flex-col items-center'>
                    <img src={item.url} alt="" />
                    <h1 className='text-white'>{item.title}</h1>
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default OurPartners