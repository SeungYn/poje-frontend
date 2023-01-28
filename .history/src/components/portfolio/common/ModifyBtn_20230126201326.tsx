import styled from 'styled-components';

interface ModifyBtnType {
  isModify: boolean;
  onSubmit?: () => {};
}

export default function ModifyBtn({ isModify }: ModifyBtnType) {
  return <Container></Container>;
}

const Container = styled.article`
  position: absolute;
`;

const modifyBtn = styled.button``;

const comfirmBtn = styled.button``;

const cancleBtn = styled.button``;
