import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';

const ICON_PATH = `${process.env.PUBLIC_URL}/public_assets/skill_icon/`;

export default function PortfolioSkills() {
  const skillItems = ['css_icon.png', 'html_icon.png'];
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
            {skillItems.map((path) => (
              <SkillItem>
                <img src={`${ICON_PATH}/${path}`} />
              </SkillItem>
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

const SkillItem = styled.li`
  & img {
    width: 10px;
  }
`;
