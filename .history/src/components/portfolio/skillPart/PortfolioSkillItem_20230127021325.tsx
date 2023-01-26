import styled from 'styled-components';
import { breakPoint } from '../../../styledComponents/media';

interface PortfolioSkillItemType {
  skillTitle: string;
  skillList: string[];
}

const ICON_PATH = `${process.env.PUBLIC_URL}/public_assets/skill_icon/`;

export default function PortfolioSkillItem({
  skillTitle,
  skillList,
}: PortfolioSkillItemType) {
  return (
    <SkillsStack>
      <SkillsTitle>{skillTitle}</SkillsTitle>
      <SkillList>
        {skillList.map((path) => (
          <SkillItem src={`${ICON_PATH}/${path}`} />
        ))}
      </SkillList>
    </SkillsStack>
  );
}

const SkillsStack = styled.div`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 1px 1px 3px black;
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: ${breakPoint.mmm}) {
    font-size: ${({ theme }) => theme.fontMiddleSize};
  }
`;

const SkillList = styled.div``;

const SkillItem = styled.img`
  display: flex;
  width: 80%;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 0.6rem;

  aspect-ratio: auto;
`;
