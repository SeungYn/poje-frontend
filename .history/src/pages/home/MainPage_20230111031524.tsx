import styled from 'styled-components';
import Resume from '../../components/home/mainPage/resume';

export default function MainPage() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Container>
      <Resume
        imgUrl={`${process.env.PUBLIC_URL}/public/public_asset/resume.jpg`}
      />
    </Container>
  );
}

const Container = styled.div``;
