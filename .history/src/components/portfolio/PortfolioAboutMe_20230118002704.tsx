import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';

export default function PortfolioAboutMe() {
  return (
    <CommonSection>
      <CommonHeader>
        <AiFillTag />
        <h3>About Me</h3>
      </CommonHeader>
    </CommonSection>
  );
}

const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

const CommonHeader = styled.div``;
