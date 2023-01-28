import PortfolioSkills, {
  PortfolioSkillsType,
  SkillListType,
} from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyHorizonBtn from '../common/ModifyHorizonBtn';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { useState } from 'react';
import PortfolioSkillMasonry from './PortfolioSkillMasonry';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';

export default function PortfolioSkillsContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [skillList, setSkillList] = useState<SkillListType[]>([]);
  const [modifySkillList, setModifySkillList] = useState([...skillList]);
  //[{type:'frontend, skills:[{name:react, path:'123'}]}, ]
  const handleAddSkill = ({
    item,
    selectedType,
  }: {
    item: SkillIconSetType;
    selectedType: SkillIconType;
  }) => {
    console.log(item);
    setModifySkillList((list) => {
      const targetTypeSet = list.find((item) => item.type === selectedType);
      if (targetTypeSet === undefined) {
        return [
          ...list,
          { type: selectedType, skills: [item] },
        ] as SkillListType[];
      }
      const willModifyTargetSet = { ...targetTypeSet };
      //willModifyTargetSet.skills.push(item);
      const newSkills = list.filter((set) => set.type !== selectedType);

      console.log(willModifyTargetSet, 'modify');
      console.log(newSkills, 'newskill');
      return [
        ...newSkills,
        {
          ...willModifyTargetSet,
          skills: [...willModifyTargetSet.skills, item],
        },
      ];
    });
    console.log(modifySkillList);
  };
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioSkillMasonry>
        <PortfolioSkills skillList={skillList} />
      </PortfolioSkillMasonry>
      {isModifyMode && (
        <PortfolioSkillMasonry>
          <PortfolioSkills skillList={modifySkillList} />
        </PortfolioSkillMasonry>
      )}
      {isModifyMode && (
        <PortfolioSkillAddPalette
          onModifyMode={toggleModify}
          handleAddSkill={handleAddSkill}
        />
      )}
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </Container>
  );
}

const Container = styled(S.CommonSection)`
  position: relative;
  background: ${({ theme }) => theme.colorPink};

  .skillsContainer {
    display: flex;
    width: auto;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
