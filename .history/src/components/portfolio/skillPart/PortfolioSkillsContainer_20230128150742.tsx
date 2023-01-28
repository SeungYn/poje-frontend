import PortfolioSkills, {
  PortfolioSkillsType,
  SkillListType,
} from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyHorizonBtn from '../common/ModifyHorizonBtn';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { useState } from 'react';

export default function PortfolioSkillsContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [skillList, setSkillList] = useState<SkillListType[]>([]);
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioSkills skillList={skillList} />
      {isModifyMode && <PortfolioSkillAddPalette onModifyMode={toggleModify} />}
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