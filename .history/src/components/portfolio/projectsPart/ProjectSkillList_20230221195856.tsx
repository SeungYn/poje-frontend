import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import {
  ProjectSkillListType,
  ProjectSkillType,
} from '@src/service/types/portfolio';
import styled from 'styled-components';
import { v4 as uuidV4 } from 'uuid';
type PropType = {
  skillList: ProjectSkillListType[];
};
export default function ProjectSkillList({ skillList }: PropType) {
  const flatSkillList = useProjectSkillList([
    {
      type: 'frontend',
      skills: [
        {
          skillId: 27,
          name: 'javascript',
        },
      ],
    },
  ]);
  console.log(123);
  console.log(flatSkillList);
  return (
    <SkillListContainer>
      <SkillList>
        {flatSkillList.map((item) => (
          <SkillItem key={uuidV4()}>
            <img src={item.path} alt='스킬이미지' style={{ width: '1.4rem' }} />
            <span>{item.name}</span>
          </SkillItem>
        ))}
      </SkillList>
    </SkillListContainer>
  );
}

const SkillListContainer = styled.div``;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const SkillItem = styled.li`
  position: relative;
  border: 2px solid ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.mainColorDark};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.4rem;

  & > img {
    flex-shrink: 0;
  }

  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
  }
`;
