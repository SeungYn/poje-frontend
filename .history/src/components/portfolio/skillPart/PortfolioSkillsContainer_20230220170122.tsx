import * as S from '../styledComponents';
import styled from 'styled-components';
import { AiFillTag } from 'react-icons/ai';
import ModifyBtn from '../common/ModifyBtn';
import { Suspense, useState } from 'react';
import PortfolioSkillsModifyMode from './PortfolioSkillsModifyMode';
import { isModifyModeFromSkills } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import PortfolioViewMode from './PortfolioViewMode';
import { ErrorBoundary } from 'react-error-boundary';
import CommonError from '@src/components/error/CommonError';
import { SkillIconSetType, SkillIconType } from '@src/util/skillicons';

export default function PortfolioSkillsContainer() {
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromSkills
  );

  return (
    <Container id='skills'>
      <S.CommonHeader>
        <AiFillTag />
        <S.HeaderTitle>Skills</S.HeaderTitle>
      </S.CommonHeader>
      <Content>
        <ErrorBoundary FallbackComponent={CommonError}>
          <Suspense fallback={<div>로딩중</div>}>
            {!isModifyMode && <PortfolioViewMode />}
            {isModifyMode && <PortfolioSkillsModifyMode />}
          </Suspense>
        </ErrorBoundary>
      </Content>
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setIsModifyMode(true)}
      />
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
