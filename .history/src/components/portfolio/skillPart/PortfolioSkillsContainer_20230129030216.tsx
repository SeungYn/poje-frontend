import PortfolioSkills, { SkillListType } from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import { useState } from 'react';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';

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
      <PortfolioSkills skillList={skillList} />
      {isModifyMode && (
        <PortfolioSkillsModifyMode
          skillList={skillList}
          toggleModify={toggleModify}
        />
      )}
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
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
