import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import { Suspense } from 'react';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import {  useRecoilValue } from 'recoil';
import PortfolioViewMode from './PortfolioViewMode';
import { ErrorBoundary } from 'react-error-boundary';
import CommonError from '@src/components/errorComponent/CommonError';
import SkillSkeleton from './SkillSkeleton';

export default function PortfolioSkillsContainer() {
  const isModifyMode = useRecoilValue(isModifyModeFromSkills);

  return (
    <Container id='skills'>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <Content>
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<SkillSkeleton />}>
            {!isModifyMode && <PortfolioViewMode />}
          </Suspense>
        </ErrorBoundary>
        {isModifyMode && <PortfolioSkillsModifyMode />}
      </Content>
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
    max-width: 1600px;
  }

  .skillsStack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
