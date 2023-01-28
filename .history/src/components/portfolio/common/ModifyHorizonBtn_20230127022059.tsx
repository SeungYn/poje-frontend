import styled from 'styled-components';

export default function ModifyHorizonBtn() {
  return <ModifyHorizonButton></ModifyHorizonButton>;
}

const ModifyHorizonButton = styled.div`
  position: relative;
  &::before {
    position: absolute;
  }
`;

const ModifyButton = styled.button``;
