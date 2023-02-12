import { useState } from 'react';
import styled from 'styled-components';

export default function CommonModal() {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) <></>;
  return <Container>나는 모달</Container>;
}

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
`;