import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import { usePortfolioInfo } from '@src/context/PortfolioInfoContext';
import styled from 'styled-components';
import { CommomButton, Container } from './modifyCommonStyledComponent';

export interface ModifyBtnType {
  isModifyMode: boolean;
  handleModifyMode: () => void;
}

export default function ModifyBtn({
  isModifyMode,
  handleModifyMode,
}: ModifyBtnType) {
  const { permissionModify } = usePortfolioInfo();

  console.log(permissionModify, 'permission')
  if (isModifyMode || !permissionModify) return <></>;
  return (
    <Container>
      <ModifyButton onClick={handleModifyMode}>수정</ModifyButton>
    </Container>
  );
}

const ModifyButton = styled(CommomButton)``;
