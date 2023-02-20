import { AxiosError } from 'axios';
import styled from 'styled-components';

type PropType = {
  error: Error | AxiosError;
  reset: () => void;
};

export default function commonError({ error, reset }: PropType) {
  return <Container></Container>;
}

const Container = styled.section``;
