import styled from 'styled-components';

export default function ModifyHorizonBtn() {
  return <ModifyHorizonButton></ModifyHorizonButton>;
}

const ModifyHorizonButton = styled.div`
  position: relative;
  &::before {
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ModifyButton = styled.button``;
