import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';
import usePortfolioLike from '@src/hooks/portfolio/usePortfolioLike';

export default function PortfolioLike() {
  const { data, handleLikeClick } = usePortfolioLike();

  if (!data) return <></>;

  return (
    <Container>
      <AiTwotoneHeart />
      <p>{data.likeCount}</p>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 2rem;
`;
