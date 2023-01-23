import { styled } from 'styled-components';

export const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

export const CommonHeader = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  gap: 1rem;
`;
