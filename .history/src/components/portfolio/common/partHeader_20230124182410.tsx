import styled from 'styled-components';

interface PartHeader {
  title: string;
  color: string;
}

export default function partHeader({ title, color }: PartHeader) {
  return (
    <CommonHeader>
			<HeaderTitle>{title}</HeaderTitle>
    </CommonHeader>
  );
}

const CommonHeader = styled<{color:string}>.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  margin-bottom: 2rem;
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
  border-bottom: 1px solid black;
`;
