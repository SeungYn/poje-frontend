import styled from 'styled-components';
import JobSearchContent from './JobSearchContent';

export default function JobPortfoliosBySearch() {
  return (
    <ProfileContainer>
      <JobSearchContent />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow: auto;
  max-width: 1600px;
`;
