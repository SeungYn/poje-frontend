import { AxiosError } from 'axios';
import styled from 'styled-components';

type PropType = {
  error: Error | AxiosError;
  reset?: () => void;
};

export default function CommonError({ error, reset }: PropType) {
  return <Container>{error.message}</Container>;
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
