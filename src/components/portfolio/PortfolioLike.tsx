import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';
import usePortfolioLike from '@src/hooks/portfolio/usePortfolioLike';

export default function PortfolioLike() {
  const { data, handleLikeClick } = usePortfolioLike();

  if (!data) return <></>;

  return (
    <Container onClick={() => handleLikeClick()} isLike={data.likeStatus}>
      <AiTwotoneHeart />
      <p>{data.likeCount}</p>
    </Container>
  );
}

const Container = styled.div<{ isLike: boolean }>`
  position: fixed;
  bottom: 4rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ isLike }) => (isLike ? 'red' : 'black')};

  p {
    font-size: 1rem;
    transform: translateY(-5px);
  }
`;
