import { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType = {
  imgList: string[];
  StyledComponent: StyledComponentBase<'img', DefaultTheme, {}, never>;
};

export default function ImageSlider({ imgList, StyledComponent }: PropType) {
  return (
    <Swiper modules={[Navigation, Pagination]} navigation pagination>
      {imgList.map((src) => (
        <SwiperSlide>
          <StyledComponent src={src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
