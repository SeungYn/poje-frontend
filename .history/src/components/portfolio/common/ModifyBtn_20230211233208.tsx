import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CommomButton, Container } from './modifyCommonStyledComponent';

export interface ModifyBtnType {
  isModifyMode: boolean;
  handleSubmit?: () => void;
  handleCancle?: () => void;
  handleModifyMode?: () => void;
}

export default function ModifyBtn() {
  const [isModify, setIsModify] = useRecoilState(
    isModifyModeFromPortfolioIntro
  );
  if (isModify) return <></>;
  return (
    <Container>
      <ModifyButton onClick={() => setIsModify((e) => !e)}>수정</ModifyButton>
    </Container>
  );
}

const ModifyButton = styled(CommomButton)``;
