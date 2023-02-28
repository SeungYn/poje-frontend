import PortfolioAboutMe from './PortfolioAboutMe';
import * as S from '../styledComponents';
import { AiFillTag } from 'react-icons/ai';
import PortfolioAboutMeModify from './PortfolioAboutMeModify';
import {  useRecoilValue } from 'recoil';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CommonError from '@src/components/errorComponent/CommonError';
import AboutMeSkeleton from './AboutMeSkeleton';
export default function PortAboutMeContainer() {
  const isModifyMode = useRecoilValue(isModifyModeFormPortfolioAboutMe);
  return (
    <S.CommonSection id='aboutme'>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>About Me</S.HeaderTitle>
      </S.CommonHeader>
      {!isModifyMode && (
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<AboutMeSkeleton />}>
            <PortfolioAboutMe />
          </Suspense>
        </ErrorBoundary>
      )}
      
    </S.CommonSection>
  );
}
