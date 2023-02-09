import { AiTwotoneHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { ProfileItemType } from './JobContent';
import { JobPortfolioCardResponse } from '@src/service/types/jobCard';

type PortfolioItemType = {
  portfolioId: number;
  title: string;
  description: string;
  backgroundImg: string;
  nickName: string;
  profileImg: string;
  likeCount: number;
};

export default function ProfileItemRemaster(data: ProfileItemType) {
  const { title, description, backgroundImg, profileImg, nickName, likeCount } =
    data;
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
        <p>{nickName}</p>
        <LikeGroup>
          <AiTwotoneHeart className='like' />
          <p>{likeCount}</p>
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
    height: 100px;
  }
`;

const ProfileTop = styled.div`
  height: 60%;
  width: 100%;
  overflow: hidden;
  transition: all 0.03s linear;
  position: relative;

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
  width: 100%;
  height: 35%;
  padding: 0.8rem;
`;

const ProfileTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;
const ProfileDescription = styled.p`
  font-size: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.8rem;
  border-top: 2px solid ${({ theme }) => theme.bgSemiDarkColor};
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
`;

const LikeGroup = styled.div`
  display: flex;
  align-items: center;
  /* color: ${({ theme }) => theme.textColor}; */
  font-size: 1.2rem;
  color: rgb(153, 3, 3);
  p {
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
