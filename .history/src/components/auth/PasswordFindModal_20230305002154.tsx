import { useFindPasswordForm } from '@src/hooks/member';
import { pwFindModalState } from '@src/store/auth';
import { breakPoint } from '@src/styledComponents/media';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function PasswordFindModal() {
  const { state, onSubmit, onChange } = useFindPasswordForm();
  const isOpen = useRecoilValue(pwFindModalState);

  // if (!isOpen) return <></>;

  return (
    <PasswordContainer>
      <PwFindForm>
        <Title>비밀번호 찾기</Title>
        <Item>
          <Label>이름</Label>
          <InputText type='text' required />
        </Item>
        <Item>
          <Label>이메일</Label>
          <InputText type='text' required />
        </Item>
        <BtnGroup>
          <Btn type='submit'>확인</Btn>
          <Btn type='button'>취소</Btn>
        </BtnGroup>
      </PwFindForm>
    </PasswordContainer>
  );
}

const PasswordContainer = styled.div`
  position: fixed;
  z-index: 10000;
  inset: 0 0 0 0;
  background: ${({ theme }) => theme.modalBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PwFindForm = styled.form`
  position: relative;
  width: 50%;
  max-width: 480px;
  background: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;

  @media screen and (max-width: ${breakPoint.mm}) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const InputText = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  outline: none;
`;

const Item = styled.div`
  width: 100%;
`;

const Label = styled.label``;

const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Btn = styled.button`
  align-self: center;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0px 0px 4px black;
  font-size: ${({ theme }) => theme.fontRegular};
`;
