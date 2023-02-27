import { AiTwotoneHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { PortfolioItemType } from '@src/service/types/jobCard';
import { useNavigate } from 'react-router-dom';

export default function ProfileItemRemaster(data: PortfolioItemType) {
  const {
    portfolioId,
    title,
    description,
    backgroundImg,
    profileImg,
    nickName,
    likeCount,
  } = data;
  const navigate = useNavigate();
  const onClickToPortfolio = () => navigate(`/portfolio/${portfolioId}`);
  return (
    <Container onClick={onClickToPortfolio}>
      <ProfileTop>
        <ProfileImgBackground src={backgroundImg} />
      </ProfileTop>
      <ProfileContent>
        <ProfileTitle>{title}</ProfileTitle>
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileContent>
      <Footer>
        <InfoGroup>
          <ProfileImg src={profileImg} />
          <p>{nickName}</p>
        </InfoGroup>
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
  font-size: ${({theme})=> theme.fontLargeRegular};
  font-weight: 600;
`;
const ProfileDescription = styled.p`
  font-size: ${({theme})=> theme.fontRegular};
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.8rem;
  border-top: 2px solid ${({ theme }) => theme.bgSemiDarkColor};
  font-size: ${({theme})=> theme.fontRegular};
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
  margin-right:0.4rem;
`;
