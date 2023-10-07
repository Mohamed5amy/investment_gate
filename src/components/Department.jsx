"use client";

// Swiper
// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import {
    Pagination,
    Autoplay,
} from "swiper/modules";


import { useEffect, useState } from "react";
import axios from "axios";

const Department = ({title}) => {


  const [data, setData] = useState([])
  const SHEET_ID = "1Y-N-54lmuKUl6BEm7H4yJO1HSs1RyvQ9T55KP2P9xzs";
  const SHEET_TITLE = "Services";
  const SHEET_RANGE = "A2:C100";

  const FULL_URL = ("https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE);

  useEffect(() => {

  axios.get(FULL_URL)
  .then((response) => {
      const myData = JSON.parse(response.data.substr(47).slice(0 , -2)).table.rows
      setData(myData.filter(item => item.c[2].v == title))
      console.log(myData)
  } )
  .catch((error) => console.log(error))
  
  } , [FULL_URL , title])
  
  
  return (
    data?.length > 0 &&
    <div className='Department'>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={24}
        slidesPerView={4}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
            0 : {
                slidesPerView : 2
            },
            600 : {
                slidesPerView : 2
            },
            900 : {
                slidesPerView : 4
            }
        }}
        modules={[Pagination , Autoplay]}
      >
        {data?.map((item , i) => {
          return (
            <SwiperSlide key={i} >
              <img src={item?.c[1].v} alt="img" width={"auto"} />
              <h4> {item?.c[0].v} </h4>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Department
