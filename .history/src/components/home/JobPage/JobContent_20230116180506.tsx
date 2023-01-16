import styled from 'styled-components';
import { breakPoint } from '../../../styledComponents/media';
export default function JobContent() {
  const items = [
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '좆런트엔드',
      name: '유승윤',
      like: 10,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '좆런트엔드',
      name: '유승윤',
      like: 10,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
    {
      titleImg: '',
      title: '안녕씹세요',
      name: '유승윤',
      like: 0,
    },
  ];
  return (
    <ProfileContainer>
      <ProfileList>
        {items.map((item) => {
          return (
            <ProfileItem>
              <ProfileCard>
                <ProfileImg
                  src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
                />
                <ProfileContent>
                  <h1>{item.name}</h1>
                  <p>{item.title}</p>
                  <LikeGroup>
                    <AiTwotoneHeart className='like' />
                    <span>{item.like}</span>
                  </LikeGroup>
                </ProfileContent>
              </ProfileCard>
            </ProfileItem>
          );
        })}
      </ProfileList>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  z-index: 40;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  overflow: auto;
`;

const ProfileList = styled.ul`
  /* background-color: ${({ theme }) => theme.bgColor}; */
  margin: 0 auto;
  display: grid;
  grid-auto-rows: minmax(220px, 250px);
  padding: 2rem 2rem;
  overflow-y: auto;
  min-height: 0;
  gap: 10px;
  max-width: 1800px;

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${breakPoint.ss}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${breakPoint.s}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${breakPoint.mmm}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: ${breakPoint.m}) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: ${breakPoint.l}) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media screen and (min-width: ${breakPoint.ll}) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (min-width: ${breakPoint.lll}) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

const ProfileItem = styled.li`
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
