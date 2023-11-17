import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './sliderproject.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ProjectCard from '../Card/Card';

export default function SliderProject() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><ProjectCard/></SwiperSlide>
        
      </Swiper>
    </>
  );
}
