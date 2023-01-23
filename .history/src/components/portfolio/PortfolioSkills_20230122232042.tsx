import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';

const ICON_PATH = `${process.env.REACT_PUVLIC}/public_assets/skill_icon/`;

export default function PortfolioSkills() {
  const skills = ['css_icon.png, html_icon.png'];
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
          <SkillList>
            {front.map((SvgComponent) => (
              <SkillItem src={`${ICON_PATH}/`} />
            ))}
          </SkillList>
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

const SkillList = styled.ul``;

const SkillItem = styled.li``;
