import useModal from '@src/hooks/common/useModal';
import { useState } from 'react';
import styled from 'styled-components';

export default function CommonModal() {
  const { isOpen, setIsOpen, modalContent } = useModal();
  if (!isOpen) <></>;
  return <Container>나는 모달</Container>;
}

const Container = styled.section`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
`;
