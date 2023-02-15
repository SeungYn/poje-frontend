import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType = {
  imgList: string[];
  StyledComponent?: StyledComponentBase<'div', DefaultTheme, {}, never>;
  handleClick?: () => void;
};

export default function ImageSlider({
  imgList,
  handleClick = () => {},
  StyledComponent = styled.div``,
}: PropType) {
  return (
    <Wrapper>
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {imgList.map((src) => (
          <SwiperSlide>
            <ProjectImg src={src} />
            <div className='slide-overlay' onClick={handleClick}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );

  // return (
  //   <>
  //     {imgList.map((src) => (
  //       <StyledComponent src={src} onClick={handleClick} />
  //     ))}
  //   </>
  // );
}

const Wrapper = styled.div`
  .swiper-slide {
    position: relative;
  }

  .slide-overlay {
    content: '클릭시 이미지가 삭제됩니다.';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .swiper-slide:hover .slide-overlay {
    opacity: 1;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;
