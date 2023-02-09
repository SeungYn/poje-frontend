import useModal from '@src/hooks/common/useModal';
import { useState } from 'react';
import styled from 'styled-components';

export default function CommonModal() {
  const { isOpen, setIsOpen, modalContent } = useModal();
  console.log(isOpen);
  if (!isOpen) return <></>;
  return (
    <Container>
      <Modal>
        <Message>{modalContent.message}</Message>
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
  width: 50%;
  height: 50%;
  border: 1px solid black;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  overflow: hidden;
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;
