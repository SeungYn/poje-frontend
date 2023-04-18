import { ProjectType } from '@src/service/types/portfolio';
import styled from 'styled-components';
import {
  DescriptionWrapper,
  ExplainSectionWrapper,
  ImgSectionWrapper,
  ProjectHeaderWrapper,
  ProjectWrapper,
  Property,
  SliderWrapper,
  SubExplainWrapper,
} from './commonStyledComponent';
import ImageSlider from './ImageSlider';
import ProjectSkillList from './ProjectSkillList';

type PropType = {
  item: ProjectType;
};

export default function Project({ item }: PropType) {
  const { prInfo, prAwardInfo, prSkillList, prImgList } = item;

  return (
    <ProjectWrapper>
      <ImgSectionWrapper>
        {/* 등록된 이미지가 하나도 없으면 이미지가 없다는 이미지를 등록시켜주기 */}
        <ImageSlider imgList={prImgList} StyledComponent={SliderWrapper} />
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
          <ProjectSkillList skillList={prSkillList} isModifyMode={false} />
        </SubExplainWrapper>
      </DescriptionWrapper>
    </ProjectWrapper>
  );
}

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
  word-break: break-all;
`;

const ProjectSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
  word-break: break-all;
`;

const Explain = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
  white-space: pre-wrap;
`;

const Hr = styled.hr``;

const Value = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
`;
