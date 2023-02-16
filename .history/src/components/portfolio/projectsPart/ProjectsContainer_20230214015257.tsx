import { Suspense } from 'react';
import styled, { useTheme } from 'styled-components';
import 'swiper/css/pagination';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
import Project from './Project';
import Projects from './Projects';

const test = [
  {
    id: 1,
    name: '무슨 노래 부르지?',
    duration: '1월 1일 ~ 1월 3일',
    description:
      'dkssudgktpdyw wjsms dbtmddbsdjrkwkfhawnghraeoighejraigjeioajioajioejrigrjeiljgiihuiu',
    belong: '냥냥뇽뇽농냥',
    link: 'wjwjfowelglewgr.cmm',
    projectImgs: [
      `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
      `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
      `${process.env.PUBLIC_URL}/public_assets/loginBanner.jpg`,
    ],
    skills: ['react', 'java'],
  },
];

export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <Suspense fallback={<div>로딩중</div>}>
          <Projects />
        </Suspense>
      </Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
