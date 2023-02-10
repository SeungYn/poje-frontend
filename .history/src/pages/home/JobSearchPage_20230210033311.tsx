import styled from 'styled-components';

export default function JobSearchPage() {
  return <Container></Container>;
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;
