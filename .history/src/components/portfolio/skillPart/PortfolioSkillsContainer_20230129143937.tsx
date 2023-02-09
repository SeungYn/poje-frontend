import PortfolioSkills from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import { useState } from 'react';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';

export type SkillListType = {
  type: SkillIconType;
  skills: SkillIconSetType[];
};

export default function PortfolioSkillsContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [skillList, setSkillList] = useState<SkillListType[]>([]);
  //[{type:'frontend, skills:[{name:react, path:'123'}]}, ]

  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <div>
        <PortfolioSkills skillList={skillList} />
        {isModifyMode && (
          <PortfolioSkillsModifyMode
            skillList={skillList}
            toggleModify={toggleModify}
          />
        )}
      </div>
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  position: relative;
  background: ${({ theme }) => theme.colorPink};

  .skillsContainer {
    display: flex;
    width: auto;
    gap: 0.8rem;
    margin-top: 0.8rem;
    max-width: 1600px;
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Content = styled.div`
  max-width: 1600px;
`;
