import { AiTwotoneHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { ProfileItemType } from './JobContent';

export default function ProfileItem({
  titleImg,
  title,
  name,
  like,
}: ProfileItemType) {
  return (
    <Container>
      <ProfileCard>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
        />
        <ProfileContent>
          <h1>{name}</h1>
          <p>{title}</p>
          <LikeGroup>
            <AiTwotoneHeart className='like' />
            <span>{like}</span>
          </LikeGroup>
        </ProfileContent>
      </ProfileCard>
    </Container>
  );
}

const Container = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
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

const ProfileImg = styled.img`
  width: 50%;
  height: 50%;
  margin-left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.mainColor};
`;

const ProfileContent = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);

  & > h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.mainColorDark};
    margin-bottom: 0.4rem;
  }

  & > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.mainColorThickDark};
  }

  .like {
    color: ${({ theme }) => theme.mainColorSemiDark};
    font-size: 1.4rem;
  }
`;

const LikeGroup = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.mainColorSemiDark};
`;
