import { ProjectType } from '@src/service/types/portfolio';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type PropType = {
  item: ProjectType;
};

export default function Project({ item }: PropType) {
  const { prInfo, prAwardInfo, prSkillList, prImgList } = item;

  return (
    <Container>
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

      <Description>
        <ProjectHeader>
          <ProjectTitle>무슨 노래 부르지?</ProjectTitle>
          <ProjectSubTitle>(1인 프로젝트)</ProjectSubTitle>
        </ProjectHeader>
        <ExplainSection>
          <Explain>{prInfo.description}</Explain>
          <Hr />
        </ExplainSection>
        <SubExplain>
          <Property>기간</Property>
          <Value>{prInfo.duration}</Value>
          <Property>깃허브 링크</Property>
          <Value>{prInfo.link}</Value>
          <Property>수상 기관</Property>
          <Value>{prAwardInfo.supervision}</Value>
          <Property>수상 순위</Property>
          <Value>{prAwardInfo.grade}</Value>
          <Property>수상 소감</Property>
          <Value>{prAwardInfo.description}</Value>
          <Property>사용 기술</Property>
          <Value>
            {prSkillList.reduce((p, c, i, origin) => {
              if (i === origin.length - 1) return p + c;
              return p + `${c},`;
            }, '')}
          </Value>
        </SubExplain>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
`;

const ImgSection = styled.div`
  position: relative;
  width: 50%;
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectHeader = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const ProjectSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
`;

const ExplainSection = styled.div``;

const Explain = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Hr = styled.hr``;

const SubExplain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: flex-start;
  @media screen and (max-width: ${breakPoint.mm}) {
    grid-template-columns: 1fr;
  }
`;

const Property = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Value = styled.p`
  text-align: center;
`;
