import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';
console.log(front);
console.log(front);
export default function PortfolioSkills() {
  console.log(front);
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <SkillsContainer>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillsSvgs>
            {front.map((SvgComponent) => (
              <SvgComponent
                width={'100'}
                height={'100'}
                viewBox='0 0 50 50'
                preserveAspectRatio='xMidYMid meet'
              />
            ))}
          </SkillsSvgs>
        </SkillsStack>
      </SkillsContainer>
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.colorPink};
`;

const SkillsContainer = styled.div``;

const SkillsStack = styled.div``;

const SkillsTitle = styled.h3``;

const SkillsSvgs = styled.div``;
