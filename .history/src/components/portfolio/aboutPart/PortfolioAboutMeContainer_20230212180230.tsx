import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import { useState } from 'react';
import PortfolioAboutMeModify from './PortfolioAboutMeModify';
import { useRecoilValue } from 'recoil';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
export default function PortAboutMeContainer() {
  const [isModifyMode, setIsModifyMode] = useRecoilValue(
    isModifyModeFormPortfolioAboutMe
  );
  const [data, setData] = useState({
    email: 'abc@123.com',
    phoneNum: '0101231231',
    birth: '1998/2/33',
    dept: '철학과',
    academic: '서울대',
    name: '유명수',
  });
  return (
    <S.CommonSection>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      {!isModifyMode && <PortfolioAboutMe {...data} />}
      {isModifyMode && <PortfolioAboutMeModify {...data} />}
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(false)}
      />
    </S.CommonSection>
  );
}
