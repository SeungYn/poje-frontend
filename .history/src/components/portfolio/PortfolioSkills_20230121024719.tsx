import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';
console.log(front);
console.log(A);
export default function PortfolioSkills() {
  console.log(front);
  return (
    <S.CommonSection>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
    </S.CommonSection>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorPink};
`;
