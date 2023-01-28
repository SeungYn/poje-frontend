import PortfolioSkills, { SkillListType } from './PortfolioSkills';

interface PortfolioSkillsModifyModeType {
  skillList: SkillListType[];
}

export default function PortfolioSkillsModifyMode({}) {
  const [modifySkillList, setModifySkillList] = useState([...skillList]);
  return (
    <>
      <PortfolioSkills skillList={modifySkillList} />
      <PortfolioSkillAddPalette
        onModifyMode={toggleModify}
        handleAddSkill={handleAddSkill}
        modifySkillList={modifySkillList}
      />
    </>
  );
}

const test = [
  {
    type: 'frontend',
    skills: [{ name: 'react', path: 'div/sesfe/fsf' }],
  },
];
