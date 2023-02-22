import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';
import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidV4 } from 'uuid';
type PropType = {
  skillList: ProjectSkillListType[];
  isModifyMode: boolean;
  handleDeleteProjectSkill?: (
    e: React.MouseEvent<HTMLLIElement>,
    skillName: string
  ) => void;
};
export default function ProjectSkillList({
  skillList,
  isModifyMode,
  handleDeleteProjectSkill,
}: PropType) {
  const { currentSkillList } = useProjectSkillList(skillList);
  console.log(currentSkillList);
  return (
    <SkillListContainer>
      <SkillList>
        {currentSkillList.map((item) => (
          <SkillItem key={uuidV4()} isModifyMode={isModifyMode}>
            {/* <img src={item.path} alt='스킬이미지' style={{ width: '1.4rem' }} /> */}
            <span>{item.name}</span>
          </SkillItem>
        ))}
      </SkillList>
    </SkillListContainer>
  );
}

const SkillListContainer = styled.div``;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SkillItem = styled.li<{ isModifyMode: boolean }>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.mainColorDark};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.4rem;

  & > img {
    flex-shrink: 0;
  }

  ${({ isModifyMode }) => {
    return (
      isModifyMode &&
      css`
        &:hover::before {
          content: '제거';
          color: white;
          font-size: 0.8rem;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #5b5b5bac;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `
    );
  }}
`;
