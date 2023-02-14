import { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType = {
  imgList: string[];
  styledComponent: StyledComponentBase<'img', DefaultTheme, {}, never>;
};

export default function ImageSlider({ imgList, styledComponent }: PropType) {
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
