import styled, { useTheme } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
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
          </ImgSection>
          <ExplainSection>
            <Explain>
              노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할
              수 있도록 도와주는 웹사이트입니다. 제 취미가 아이디어의
              원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는
              마음으로 개발했습니다. Firebase 서비스를 처음 사용해봤다는
              것만으로도 의미가 있었지만, 그 과정에서 OAuth 2.0의 개념을 한 번
              더 깊게 다지고 NoSQL을 실제로 사용해볼 수 있었다는 점에서 더욱
              의미가 있었습니다. 최근에 인기가 많은 Tailwind CSS를 처음으로
              사용해보며 이것의 차별적인 유용성을 느낄 수 있었고, 동시에
              PostCSS가 무엇인지 배우는 계기도 되었습니다. 이론으로만 알고 있던
              PWA를 실제로 구현해봄으로써 앞으로 웹 생태계가 뻗어나갈 무한한
              가능성과 확장성을 몸소 체감할 수 있었습니다.
            </Explain>
          </ExplainSection>
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

const ImgSection = styled.div`
  position: relative;
  width: 50%;
  img {
    width: 100%;
  }
`;

const ExplainSection = styled.div``;

const Explain = styled.p``;
