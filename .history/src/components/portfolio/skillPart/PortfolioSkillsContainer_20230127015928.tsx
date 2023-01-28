import PortfolioSkills from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';

export default function PortfolioSkillsContainer() {
  return <PortfolioSkills />;
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
