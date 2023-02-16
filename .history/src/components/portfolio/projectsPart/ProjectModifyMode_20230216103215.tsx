import useProjectModify from '@src/hooks/portfolio/project/useProjectModify';
import { ProjectType } from '@src/service/types/portfolio';
import { useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import {
  DescriptionWrapper,
  ExplainSectionWrapper,
  ImgSectionWrapper,
  ProjectHeaderWrapper,
  ProjectImg,
  ProjectWrapper,
  Property,
  SliderWrapper,
  SubExplainWrapper,
} from './commonStyledComponent';
import ImageSlider from './ImageSlider';
import DeleteBtn from '../common/DeleteBtn';
type PropType = {
  item: ProjectType;
  handleModifyMode: () => void;
};

export default function ProjectModifyMode({
  item,
  handleModifyMode,
}: PropType) {
  const {
    copiedProject,
    onChange,
    onChangeTextArea,
    discriptionRef,
    loading,
    handleSubmit,
  } = useProjectModify(item);
  const { prInfo, prAwardInfo, prSkillList, prImgList } = copiedProject;

  //pre라인 autoheight
  useEffect(() => {}, []);

  return (
    <ProjectWrapper as='form' onSubmit={handleSubmit}>
      {loading && <LoadingSpiner text={'업데이트중'} />}
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
        <input
          type='file'
          id='file'
          name='file'
          accept={'image/gif, image/jpeg, image/png'}
          style={{ display: 'none' }}
          onChange={onChange}
          multiple
        />
      </ImgSectionWrapper>

      <DescriptionWrapper>
        <ProjectHeaderWrapper>
          <ProjectTitle name='name' value={prInfo.name} onChange={onChange} />
          <ProjectSubTitle
            name='belong'
            value={prInfo.belong}
            onChange={onChange}
          />
        </ProjectHeaderWrapper>
        <ExplainSectionWrapper>
          <Explain
            ref={discriptionRef}
            name='project-description'
            value={prInfo.description}
            onChange={onChangeTextArea}
          />
          <Hr />
        </ExplainSectionWrapper>
        <SubExplainWrapper>
          <Property>기간</Property>
          <ValueInput
            name='duration'
            value={prInfo.duration}
            onChange={onChange}
          />
          <Property>깃허브 링크</Property>
          <ValueInput name='link' value={prInfo.link} onChange={onChange} />
          <Property>수상 기관</Property>
          <ValueInput
            name='supervision'
            value={prAwardInfo.supervision}
            onChange={onChange}
          />
          <Property>수상 순위</Property>
          <ValueInput
            name='grade'
            value={prAwardInfo.grade}
            onChange={onChange}
          />
          <Property>수상 소감</Property>
          <ValueInput
            name='award-description'
            value={prAwardInfo.description}
            onChange={onChange}
          />
          <Property>사용 기술</Property>
          <Value>
            {prSkillList.reduce((p, c, i, origin) => {
              if (i === origin.length - 1) return p + c;
              return p + `${c},`;
            }, '')}
          </Value>
        </SubExplainWrapper>
      </DescriptionWrapper>
      <DeleteBtn />
      <ModifyComfirmAndCancleGroup
        handleSubmit={() => {}}
        handleCloseBtn={handleModifyMode}
      />
    </ProjectWrapper>
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

const Value = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontRegular};
`;

const ValueInput = styled(CommonTextInput)``;
