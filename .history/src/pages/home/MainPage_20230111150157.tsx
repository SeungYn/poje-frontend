import styled from 'styled-components';
import Resume from '../../components/home/mainPage/Resume';

export default function MainPage() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Container>
      <Resume imgUrl={`${process.env.PUBLIC_URL}/public_assets/resume.jpg`} />
    </Container>
  );
}

const Container = styled.div``;
