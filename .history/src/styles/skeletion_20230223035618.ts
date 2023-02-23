import styled from 'styled-components';

export const EmptyDiv = styled.div`
  background: #ddd;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  margin: 0 auto;
`;

export const SkeletionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8rem 4rem;
  z-index: 1000;
`;
