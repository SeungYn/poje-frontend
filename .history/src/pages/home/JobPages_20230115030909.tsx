import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';
import { CgProfile } from 'react-icons/cg';
const items = [
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
];

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
      <PortFolioContainer>
        <PortFolioList>
          {items.map((item) => {
            return (
              <PortFolioItem>
                <PortFolioCard>
                  <ProfileImg
                    src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
                  />
                  <ProfileContent>
                    <h2>{item.title}</h2>
                    <span>{item.name}</span>
                  </ProfileContent>
                </PortFolioCard>
                {/* <img
                  src={
                    item.titleImg ||
                    `${process.env.PUBLIC_URL}/public_assets/write.jpg`
                  }
                /> */}
                {/* <h2>{item.title}</h2>
                <span>{item.name}</span> */}
              </PortFolioItem>
            );
          })}
        </PortFolioList>
      </PortFolioContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PortFolioContainer = styled.section`
  z-index: 40;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  overflow: auto;
`;

const PortFolioList = styled.ul`
  background-color: ${({ theme }) => theme.bgColor};
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

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

const PortFolioItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  & > img {
    width: 100%;
    height: 200px;
  }
`;

const PortFolioCard = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  border: 1px solid black;
  border-radius: 1rem; ;
`;

const ProfileImg = styled.img`
  width: 50%;
  height: 50%;
  margin-left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const ProfileContent = styled.div`
  position: absolute;
  top: 0;
`;
