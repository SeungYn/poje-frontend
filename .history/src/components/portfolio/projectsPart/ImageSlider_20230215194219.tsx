import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType = {
  imgList: string[];
  StyledComponent: StyledComponentBase<'div', DefaultTheme, {}, never>;
  handleClick?: () => void;
};

export default function ImageSlider({
  imgList,
  handleClick = () => {},
  StyledComponent,
}: PropType) {
  return (
    <StyledComponent>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        autoHeight={false}
      >
        {imgList.map((src) => (
          <SwiperSlide>
            <ProjectImg src={src} />
            <div className='slide-overlay' onClick={handleClick}>
              클릭시 이미지가 삭제됩니다.
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledComponent>
  );
}

const ProjectImg = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;
