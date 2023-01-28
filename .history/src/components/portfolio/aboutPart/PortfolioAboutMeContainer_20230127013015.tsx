import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
export default function PortAboutMeContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  return (
    <S.CommonSection>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioAboutMe />
    </S.CommonSection>
  );
}
