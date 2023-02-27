import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';
import usePortfolioLike from '@src/hooks/portfolio/usePortfolioLike';

export default function PortfolioLike() {
  const { data, handleLikeClick } = usePortfolioLike();
  return (
    <div>
      <AiTwotoneHeart />
      <p>{data?.likeCount}</p>
    </div>
  );
}

const Container = styled.div``;
