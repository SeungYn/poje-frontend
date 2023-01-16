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
];

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
      <PortFolioContainer>
        {items.map((item) => {
          return (
            <PortFolioList>
              <PortFolioItem>
                <img
                  src={
                    item.titleImg ||
                    `${process.env.PUBLIC_URL}/public_assets/write.jpg`
                  }
                />
              </PortFolioItem>
            </PortFolioList>
          );
        })}
      </PortFolioContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PortFolioContainer = styled.section`
  z-index: 40;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
`;

const PortFolioList = styled.ul``;
const PortFolioItem = styled.li``;