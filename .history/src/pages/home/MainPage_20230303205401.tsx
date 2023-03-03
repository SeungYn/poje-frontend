import styled from 'styled-components';
import Resume from '../../components/home/mainPage/Resume';
import Write from '../../components/home/mainPage/Write';

export default function MainPage() {
  return (
    <Container>
      <Resume imgUrl={`${process.env.PUBLIC_URL}/public_assets/resume.jpg`} />
      <Write imgUrl={`${process.env.PUBLIC_URL}/public_assets/write.jpg`} />
    </Container>
  );
}

const Container = styled.section``;
