import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';
console.log(front);
console.log(A);
export default function PortfolioSkills() {
  console.log(front);
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
        <SkillsContainer></SkillsContainer>
      </S.CommonHeader>
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorPink};
`;

const SkillsContainer = styled.div``;
