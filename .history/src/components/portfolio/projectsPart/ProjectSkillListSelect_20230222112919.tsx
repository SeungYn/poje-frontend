import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';
import styled from 'styled-components';

type PropType = { skillList: ProjectSkillListType[] };
export default function ProjectSkillListSelect({ skillList }: PropType) {
  const { categorySkillList, skillIconKeys } = useProjectSkillList(skillList);
  console.log(categorySkillList);
  return (
    <select>
      {skillIconKeys.map((key) => {
        return (
          <optgroup key={key} label={key}>
            {categorySkillList[key].map((skill) => {
              return (
                <option key={skill.name} data-type={key}>
                  {skill.name}
                </option>
              );
            })}
          </optgroup>
        );
      })}
    </select>
  );
}

const Select = styled.select`
  width: 100%;
`;
