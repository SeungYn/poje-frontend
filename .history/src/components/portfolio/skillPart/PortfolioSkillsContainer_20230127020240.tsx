import PortfolioSkills from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';

export default function PortfolioSkillsContainer() {
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioSkills />
    </Container>
  );
}

const Container = styled(S.CommonSection)`
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
