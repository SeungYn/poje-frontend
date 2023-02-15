import { ProjectType } from '@src/service/types/portfolio';
import styled from 'styled-components';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import {
  DescriptionWrapper,
  ExplainSectionWrapper,
  ImgSectionWrapper,
  ProjectHeaderWrapper,
  ProjectImg,
  ProjectWrapper,
  SliderWrapper,
  SubExplainWrapper,
} from './commonStyledComponent';
import ImageSlider from './ImageSlider';
type PropType = {
  item: ProjectType;
  handleModifyMode: () => void;
};

export default function ProjectModifyMode({
  item,
  handleModifyMode,
}: PropType) {
  const { prInfo, prAwardInfo, prSkillList, prImgList } = item;
  return (
    <>
      <ProjectWrapper as='form'>
        <ImgSectionWrapper>
          {/* 등록된 이미지가 하나도 없으면 이미지가 없다는 이미지를 등록시켜주기 */}
          <ImageSlider
            imgList={
              prImgList.length > 0
                ? prImgList
                : [
                    `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
                    `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
                    `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
                  ]
            }
            handleClick={() => {
              console.log('click');
            }}
            StyledComponent={HoverImgSliderWrapper}
          />
          <ImgUploadLabel htmlFor='file'>이미지 등록하기</ImgUploadLabel>
          <input type='file' id='file' style={{ display: 'none' }} />
        </ImgSectionWrapper>

        <DescriptionWrapper>
          <ProjectHeaderWrapper>
            <ProjectTitle value={prInfo.name} />
            <ProjectSubTitle value={prInfo.belong} />
          </ProjectHeaderWrapper>
          <ExplainSectionWrapper>
            <Explain value={prInfo.description} />
            <Hr />
          </ExplainSectionWrapper>
          <SubExplainWrapper>
            <Property>기간</Property>
            <ValueInput value={prInfo.duration} />
            <Property>깃허브 링크</Property>
            <ValueInput value={prInfo.link} />
            <Property>수상 기관</Property>
            <ValueInput value={prAwardInfo.supervision} />
            <Property>수상 순위</Property>
            <ValueInput value={prAwardInfo.grade} />
            <Property>수상 소감</Property>
            <ValueInput value={prAwardInfo.description} />
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
    </>
  );
}

const CommonTextInput = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid rgb(139, 139, 139);
  margin-bottom: 0.4rem;
  outline: none;
  padding-bottom: 0.4rem;
`;

const HoverImgSliderWrapper = styled(SliderWrapper)`
  .swiper-slide {
    position: relative;
  }

  .slide-overlay {
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide:hover .slide-overlay {
    opacity: 1;
  }
`;

const ProjectTitle = styled(CommonTextInput)`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const ProjectSubTitle = styled(CommonTextInput)`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
`;

const ImgUploadLabel = styled.label``;

const Explain = styled.textarea`
  width: 100%;
  font-size: ${({ theme }) => theme.fontRegular};
  border: none;
  outline: none;
  height: auto;
  resize: none;
`;

const Hr = styled.hr``;

const Property = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Value = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const ValueInput = styled(CommonTextInput)``;
