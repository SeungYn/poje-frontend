import Shimmer from '@src/components/common/Shimmer';
import { EmptyDiv } from '@src/styles/skeletion';
import styled from 'styled-components';

export default function AboutMeSkeleton() {
  return (
    <>
      <EmptyDiv1></EmptyDiv1>
      <EmptyDiv2>
        <Shimmer />
      </EmptyDiv2>
    </>
  );
}

const EmptyDiv1 = styled(EmptyDiv)`
  width: 100%;
  height: 50px;
  border-radius: 1rem;
`;

const EmptyDiv2 = styled(EmptyDiv)`
  width: 80%;
  height: 100px;
  margin-top: 40px;
`;
