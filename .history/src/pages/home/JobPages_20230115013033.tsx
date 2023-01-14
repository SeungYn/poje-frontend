import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';

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
                <img
                  style={{ width: '200px', height: '200px' }}
                  src={
                    item.titleImg ||
                    `${process.env.PUBLIC_URL}/public_assets/write.jpg`
                  }
                />
                <h2>{item.title}</h2>
                <span>{item.name}</span>
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
  margin: 0 auto;
  display: grid;
  overflow-y: auto;
  min-height: 0;

  /* @media screen and (max-width: 350px) {
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
  } */
`;
const PortFolioItem = styled.li``;
