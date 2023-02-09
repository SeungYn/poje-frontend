import styled, { useTheme } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
import Project from './Project';

export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Project />
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
`;

const ImgSection = styled.div`
  position: relative;
  width: 50%;
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectHeader = styled.div`
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const ProjectSubTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColorToneDown};
`;

const ExplainSection = styled.div``;

const Explain = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Hr = styled.hr``;

const SubExplain = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: auto;
  justify-items: center;
`;

const Property = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const Value = styled.p``;
