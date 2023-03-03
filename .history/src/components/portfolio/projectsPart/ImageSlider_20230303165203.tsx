import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidV4 } from 'uuid';

type PropType = {
  imgList: string[];
  StyledComponent: StyledComponentBase<'div', DefaultTheme, {}, never>;
  handleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ImageSlider({
  imgList,
  handleClick,
  StyledComponent,
}: PropType) {
  return (
    <StyledComponent>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        autoHeight={false}
        tabIndex={0}
      >
        {imgList.length === 0 && (
          <SwiperSlide>
            <UploadContainer>이미지를 등록 해주세요.</UploadContainer>
          </SwiperSlide>
        )}
        {imgList.length !== 0 &&
          imgList.map((src) => (
            <SwiperSlide key={uuidV4()}>
              <ProjectImg src={src} />
              <div
                className='slide-overlay'
                data-src={src}
                onClick={handleClick}
              >
                클릭시 이미지가 삭제됩니다.
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </StyledComponent>
  );
}

const ProjectImg = styled.img`
  background-size: contain !important;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const UploadContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #666666;
`;
