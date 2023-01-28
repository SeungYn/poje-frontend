import { AiTwotoneHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { ProfileItemType } from './JobContent';

export default function ProfileItemRemaster({
  titleImg,
  title,
  description,
  like,
}: ProfileItemType) {
  return (
    <Container>
      <ProfileTop>
        <ProfileImgBackground
          src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
        />
      </ProfileTop>
      <ProfileContent>
        <ProfileTitle>{title}</ProfileTitle>
        <ProfileDescription>{description}</ProfileDescription>
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
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 2px 2px 8px 3px ${({ theme }) => theme.darkBgColor},
    -2px -2px 8px 3px ${({ theme }) => theme.darkBgColor};
  cursor: pointer;
  & > img {
    width: 100%;
    height: 200px;
  }
`;
const ProfileTop = styled.div`
  flex-basis: 60%;
  width: 100%;
  overflow: hidden;
  transition: all 0.03s linear;
  position: relative;
  transform: translateY(-10px);
  &:hover {
    & > img {
      transform: scale(1.2);
    }
  }
`;

const ProfileImgBackground = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s linear;
`;

const ProfileContent = styled.div`
  flex-basis: 30%;
  width: 100%;

  padding: 0.8rem;
`;

const ProfileTitle = styled.h2``;
const ProfileDescription = styled.p``;

const Footer = styled.footer`
  flex-basis: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-top: 2px solid ${({ theme }) => theme.bgSemiDarkColor};
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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
