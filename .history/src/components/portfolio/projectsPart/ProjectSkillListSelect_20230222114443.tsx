import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';
import { url } from 'inspector';
import styled from 'styled-components';

type PropType = { skillList: ProjectSkillListType[] };
export default function ProjectSkillListSelect({ skillList }: PropType) {
  const { categorySkillList, skillIconKeys } = useProjectSkillList(skillList);
  console.log(categorySkillList);
  return (
    <Select>
      {skillIconKeys.map((key) => {
        return (
          <optgroup key={key} label={key}>
            {categorySkillList[key].map((skill) => {
              return (
                <Option
                  key={skill.name}
                  data-type={key}
                  style={{ backgroundImage: `url(${skill.path})` }}
                  testImg={skill.path}
                >
                  {skill.name}
                </Option>
              );
            })}
          </optgroup>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  width: 100%;
`;

const Option = styled.option`
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px 20px;
  padding-left: 30px;
`;
