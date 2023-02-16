import { ProjectType } from '@src/service/types/portfolio';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  DescriptionWrapper,
  ExplainSectionWrapper,
  ImgSectionWrapper,
  ProjectHeaderWrapper,
  ProjectImg,
  ProjectWrapper,
  SubExplainWrapper,
} from './commonStyledComponent';
import ImageSlider from './ImageSlider';

type PropType = {
  item: ProjectType;
};

export default function Project({ item }: PropType) {
  const { prInfo, prAwardInfo, prSkillList, prImgList } = item;

  return (
    <ProjectWrapper>
      <ImgSectionWrapper>
        <ImageSlider
          imgList={
            prImgList.length > 0
              ? prImgList
              : [`${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`]
          }
          StyledComponent={ProjectImg}
        />
      </ImgSectionWrapper>

      <DescriptionWrapper>
        <ProjectHeaderWrapper>
          <ProjectTitle>{prInfo.name}</ProjectTitle>
          <ProjectSubTitle>({prInfo.belong})</ProjectSubTitle>
        </ProjectHeaderWrapper>
        <ExplainSectionWrapper>
          <Explain>{prInfo.description}</Explain>
          <Hr />
        </ExplainSectionWrapper>
        <SubExplainWrapper>
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
        </SubExplainWrapper>
      </DescriptionWrapper>
    </ProjectWrapper>
  );
}

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const ProjectSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
`;

const Explain = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Hr = styled.hr``;

const Property = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Value = styled.p`
  text-align: center;
`;
