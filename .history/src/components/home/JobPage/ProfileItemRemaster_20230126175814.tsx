import { AiTwotoneHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { ProfileItemType } from './JobContent';

export default function ProfileItemRemaster({
  titleImg,
  title,
  name,
  like,
}: ProfileItemType) {
  return (
    <Container>
      <ProfileContent>
        <h1>{name}</h1>
        <p>{title}</p>
      </ProfileContent>
      <Footer>
        <InfoGroup>
          <ProfileImg
            src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
          />
        </InfoGroup>
        <LikeGroup>
          <AiTwotoneHeart className='like' />
          <div>{like}</div>
        </LikeGroup>
      </Footer>
    </Container>
  );
}

const Container = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid black;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 200px;
  }
`;

const ProfileCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.mainColorLight};
  width: 100%;
  height: 80%;
  border: 3px solid ${({ theme }) => theme.mainColor};
  border-radius: 1rem;
`;

const ProfileContent = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
`;

const InfoGroup = styled.div``;

const LikeGroup = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.2rem;

  div {
    margin-left: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
