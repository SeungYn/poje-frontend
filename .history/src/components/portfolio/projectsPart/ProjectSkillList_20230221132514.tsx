import { ProjectSkillType } from '@src/service/types/portfolio';
import styled from 'styled-components';
type PropType = {
  skillList: ProjectSkillType[];
};
export default function ProjectSkillList({ skillList }: PropType) {
  return <SkillListContainer></SkillListContainer>;
}

const SkillListContainer = styled.div``;

const SkillList = styled.ul``;

const SkillItem = styled.li``;
