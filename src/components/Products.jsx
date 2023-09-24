"use client";

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
    EffectCoverflow,
    Pagination,
    Autoplay,
    SwiperCore,
} from "swiper/modules";

import Image from "next/image";

// images
import img1 from "../../public/images/coming_soon.svg";
import img2 from "../../public/images/welcoming.svg";

const Products = () => {
    return (
        <div className="Products">
            <h2>Products</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    0 : {
                        slidesPerView : 1
                    },
                    600 : {
                        slidesPerView : 2
                    },
                    900 : {
                        slidesPerView : 3
                    }
                }}
            >
                <SwiperSlide>
                    <div>
                        <Image src={img2} alt="img" />
                        <div className="name"> Product </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src={img1} alt="img" />
                        <div className="name"> Product </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src={img2} alt="img" />
                        <div className="name"> Product </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Image src={img1} alt="img" />
                        <div className="name"> Product </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Products;
