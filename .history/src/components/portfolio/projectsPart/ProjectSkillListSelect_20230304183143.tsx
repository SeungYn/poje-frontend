import useProjectSkillList from '@src/hooks/portfolio/project/useProjectSkillList';
import { ProjectSkillListType } from '@src/service/types/portfolio';
import styled from 'styled-components';

type PropType = {
  skillList: ProjectSkillListType[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
export default function ProjectSkillListSelect({
  skillList,
  onChange,
}: PropType) {
  const { categorySkillList, skillIconKeys } = useProjectSkillList(skillList);

  return (
    <Select onChange={onChange}>
      {skillIconKeys.map((key) => {
        return (
          <optgroup key={key} label={key}>
            {categorySkillList[key].map((skill) => {
              return (
                <Option key={skill.name} data-type={key} testImg={skill.path}>
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

const Option = styled.option<{ testImg: string }>`
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px 20px;
  padding-left: 30px;
  background-image: ${({ testImg }) => `url(${testImg})`};
`;
