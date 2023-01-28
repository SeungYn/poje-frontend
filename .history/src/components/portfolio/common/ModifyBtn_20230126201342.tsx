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

const ModifyBtn = styled.button``;

const ComfirmBtn = styled.button``;

const CancleBtn = styled.button``;
