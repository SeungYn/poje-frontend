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
    seletedType,
  }: {
    item: SkillIconSetType;
    seletedType: SkillIconType;
  }) => {
    console.log(item);
    setModifySkillList((list) => {
      const targetTypeSet = list.find((item) => item.type === seletedType);
      if (targetTypeSet === undefined)
        return [
          ...list,
          { type: seletedType, skills: [item] },
        ] as SkillListType[];
      targetTypeSet.skills.push(item);
      const newSkills = list.filter((set) => set.type !== seletedType);
      return [...newSkills, { ...targetTypeSet }];
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
          onAddSkill={handleAddSkill}
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
