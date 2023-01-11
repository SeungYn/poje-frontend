import styled from 'styled-components';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  return (
    <>
      <ImgContainer imgUrl={imgUrl}></ImgContainer>
      <img
        src='/public_asset/resume.jpg'
        style={{ width: '100px', height: '100px' }}
        alt=''
      />
    </>
  );
}

const ImgContainer = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
`;
