import PortfolioSkills, {
  PortfolioSkillsType,
  SkillListType,
} from './PortfolioSkills';
import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioSkillAddPalette from './PortfolioSkillAddPalette';
import { useState } from 'react';
import { SkillIconSetType, SkillIconType } from '../../../util/skillicons';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';

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
    setModifySkillList((list) => {
      const targetTypeSet = list.find((item) => item.type === selectedType);
      if (targetTypeSet === undefined) {
        return [
          ...list,
          { type: selectedType, skills: [item] },
        ] as SkillListType[];
      }
      const willModifyTargetSet = { ...targetTypeSet };
      const newSkills = list.filter((set) => set.type !== selectedType);
      return [
        ...newSkills,
        {
          ...willModifyTargetSet,
          skills: [...willModifyTargetSet.skills, item],
        },
      ];
    });
  };
  return (
    <Container>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>

      <PortfolioSkills skillList={skillList} />

      {isModifyMode && (
        <PortfolioSkillsModifyMode
          skillList={skillList}
          toggleModify={toggleModify}
        />
      )}
      {isModifyMode && <PortfolioSkills skillList={modifySkillList} />}
      {isModifyMode && (
        <PortfolioSkillAddPalette
          onModifyMode={toggleModify}
          handleAddSkill={handleAddSkill}
          modifySkillList={modifySkillList}
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
