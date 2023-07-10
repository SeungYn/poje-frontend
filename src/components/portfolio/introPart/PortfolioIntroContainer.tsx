import CommonError from '@src/components/errorComponent/CommonError';
import useIntroObserver from '@src/hooks/portfolio/intro/useIntroObserver';
import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import IntroSkeleton from './IntroSkeleton';
import PortfolioIntro from './PortfolioIntro';
import PortfolioIntroModify from './PortfolioIntroModify';

export default function PortfolioIntroContainer() {
  const isModifyMode = useRecoilValue(isModifyModeFromPortfolioIntro);
  const { introRef } = useIntroObserver();

  return (
    <Container ref={introRef} id='intro'>
      {!isModifyMode && (
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<IntroSkeleton />}>
            <PortfolioIntro />
          </Suspense>
        </ErrorBoundary>
      )}
      {isModifyMode && <PortfolioIntroModify />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

// const Intro = styled.section<{ imgUrl: string }>`
//   position: relative;
//   padding: 10rem 6rem 6rem 6rem;
//   &::before {
//     content: '';
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     position: absolute;
//     background-image: url(${BAKCGROUND_IMAGE});
//     background-size: cover;
//     background-position: center;
//     filter: brightness(0.5);
//     z-index: -1;
//   }
// `;

// const PortfolioSectionContainer = styled.section`
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// `;

// const InputTextContainer = styled.div`
//   margin: 0 auto;
// `;

// const CommonTextInput = styled.input`
//   border: none;
//   background: transparent;
//   text-align: center;
//   width: 100%;
// `;

// const IntroTitle = styled.h3`
//   color: white;
//   font-size: 3.4rem;
// `;

// const IntroTitleInput = styled(CommonTextInput)`
//   color: white;
//   font-size: 3.4rem;
// `;

// const IntroHr = styled.hr`
//   width: 30%;
//   height: 5px;
//   background: ${({ theme }) => theme.textAccentColor};
//   border: none;
// `;

// const IntroDescription = styled.p`
//   text-align: center;
//   font-size: ${({ theme }) => theme.fontMiddleSize};
//   filter: brightness(0.9);
//   letter-spacing: 2px;
//   line-height: calc(${({ theme }) => theme.fontMiddleSize} + 0.4rem);
// `;

// const IntroDescriptionInput = styled.textarea`
//   color: white;
//   text-align: center;
//   font-size: ${({ theme }) => theme.fontMiddleSize};
//   filter: brightness(0.9);
//   letter-spacing: 2px;
//   line-height: calc(${({ theme }) => theme.fontMiddleSize} + 0.4rem);
//   background: transparent;
//   border: none;
//   outline: none;
// `;
