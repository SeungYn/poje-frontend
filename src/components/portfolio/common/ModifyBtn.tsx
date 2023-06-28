import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import styled from 'styled-components';
import { CommomButton, Container } from './modifyCommonStyledComponent';

export interface ModifyBtnType {
  isModifyMode?: boolean;
  handleModifyMode: () => void;
}

export default function ModifyBtn({
  isModifyMode = false,
  handleModifyMode,
}: ModifyBtnType) {
  const { permissionModify } = usePortfolioInfo();

  if (!permissionModify) return <></>;
  return (
    <Container>
      <ModifyButton onClick={handleModifyMode}>수정</ModifyButton>
    </Container>
  );
}

const ModifyButton = styled(CommomButton)``;
