import styled from 'styled-components';

interface ModifyBtnType {
  isModify: boolean;
}

export default function ModifyBtn({ isModify }: ModifyBtnType) {
  return <Container></Container>;
}

const Container = styled.article`
  position: absolute;
`;
