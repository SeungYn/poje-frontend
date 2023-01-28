import useModifyMode from '../../../hooks/useModifyMode';
import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import { useState } from 'react';
export default function PortAboutMeContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [data, setData] = useState({
    email: 'abc@123.com',
    phoneNum: '0101231231',
    birth: '1998/2/33',
    dept: '철학과',
    academic: '서울대',
  });
  return (
    <S.CommonSection>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      <PortfolioAboutMe />
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </S.CommonSection>
  );
}
