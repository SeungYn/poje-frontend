import styled from 'styled-components';

export const Container = styled.article`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;
