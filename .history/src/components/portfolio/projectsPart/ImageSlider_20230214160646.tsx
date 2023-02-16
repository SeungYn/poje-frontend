import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType{
	imgList: string[];
}

export default function ImageSlider() {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination>
      <SwiperSlide>
        <img
          src={`${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`}
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`}
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
}
