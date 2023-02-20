import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import { useState } from 'react';
import PortfolioAboutMeModify from './PortfolioAboutMeModify';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CommonError from '@src/components/error/CommonError';
export default function PortAboutMeContainer() {
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFormPortfolioAboutMe
  );
  return (
    <S.CommonSection id='#aboutme'>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      {!isModifyMode && (
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<div>로딩중</div>}>
            <PortfolioAboutMe />
          </Suspense>
        </ErrorBoundary>
      )}
      {isModifyMode && <PortfolioAboutMeModify />}
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(true)}
      />
    </S.CommonSection>
  );
}
