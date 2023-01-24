import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { A, front } from '../svgs/Test1';
import * as S from './styledComponents';

const ICON_PATH = `${process.env.PUBLIC_URL}/public_assets/skill_icon/`;

export default function PortfolioSkills() {
  const skillItems = ['css_icon.png', 'html_icon.png'];
  const skillItems2 = [
    'css_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
    'html_icon.png',
  ];
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
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>

          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems2.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
            ))}
          </SkillList>
        </SkillsStack>
        <SkillsStack>
          <SkillsTitle>Frontend</SkillsTitle>
          <SkillList>
            {skillItems.map((path) => (
              <SkillItem src={`${ICON_PATH}/${path}`} />
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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 3000px;

  align-content: flex-start;
`;

const SkillsStack = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const SkillsTitle = styled.h3``;

const SkillList = styled.div``;

const SkillItem = styled.img`
  width: 100%;
`;
