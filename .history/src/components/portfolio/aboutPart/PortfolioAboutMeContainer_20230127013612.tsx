import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
export default function PortAboutMeContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  return (
    <S.CommonSection>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioAboutMe />
      <ModifyBtn isModifyMode={isModifyMode} toggleModify={toggleModify} />
    </S.CommonSection>
  );
}
