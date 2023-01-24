import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';

interface PartHeaderType {
  title: string;
  color?: string;
}

export default function PartHeader({ title, color = 'black' }: PartHeaderType) {
  return (
    <CommonHeader color={color}>
      <AiFillTag />
      <HeaderTitle>{title}</HeaderTitle>
    </CommonHeader>
  );
}

const CommonHeader = styled.div<{ color?: string }>`
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  margin-bottom: 2rem;
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
  border-bottom: 1px solid ${({ color }) => color};
`;
