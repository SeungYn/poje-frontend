import styled from 'styled-components';

export default function MemberModify() {
  return <Container>f</Container>;
}

const Container = styled.div`
  grid-template-areas:
    'img img name name'
    'img img academic academic'
    '. . dept dept '
    'brith brith brith brith'
    'phoneNum phoneNum phoneNum phoneNum'
    'email email email email'
    'gitHubLink gitHubLink gitHubLink gitHubLink'
    'blogLink blogLink blogLink blogLink';
`;

const Img = styled.img`
  grid-area: img;
`;
