import styled, { useTheme } from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';

export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <ProjectHeader>
          <ProjectTitle>무슨 노래 부르지?</ProjectTitle>
          <ProjectSubTitle>(1인 프로젝트)</ProjectSubTitle>
        </ProjectHeader>
        <Description>
          <ImgSection>
            <Swiper modules={[Navigation]}>
              <SwiperSlide>
                <img
                  src={`${process.env.PUBLIC}/public_assets/loginBanner.jpg`}
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </ImgSection>
        </Description>
      </Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
`;

const ProjectHeader = styled.div`
  margin-bottom: 0.8rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
  margin-bottom: 0.8rem;
`;

const ProjectSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
`;

const Description = styled.div`
  display: flex;
`;

const ImgSection = styled.div``;
