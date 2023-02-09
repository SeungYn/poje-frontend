import useModal from '@src/hooks/common/useModal';
import { useState } from 'react';
import styled from 'styled-components';

export default function CommonModal() {
  const { isOpen, closeModal, modalContent } = useModal();

  if (!isOpen) return <></>;
  return (
    <Container>
      <Modal>
        <Message>{modalContent.message}</Message>
        <ConfirmBtn onClick={closeModal}>확인</ConfirmBtn>
      </Modal>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.modalBackgroundColor};
`;

const Modal = styled.div`
  padding: 2rem 2rem;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.bgSemiDarkColor};
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontMiddleSize};
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.textColor};
  word-break: normal;
`;

const ConfirmBtn = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${({ theme }) => theme.bgSemiDarkColor};
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
`;
