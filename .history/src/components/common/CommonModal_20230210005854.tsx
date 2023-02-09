import useModal from '@src/hooks/common/useModal';
import { useState } from 'react';
import styled from 'styled-components';

export default function CommonModal() {
  const { isOpen, setIsOpen, modalContent } = useModal();
  if (!isOpen) <></>;
  return (
    <Container>
      <Modal></Modal>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid black;
`;
