import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';

export default function PortfolioAboutMe() {
  return (
    <CommonSection>
      <CommonHeader>
        <AiFillTag />
        <HeaderTitle>About Me</HeaderTitle>
      </CommonHeader>
    </CommonSection>
  );
}

const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

const CommonHeader = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  margin: 0 auto;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
`;
