import { usePwModifyForm } from '@src/hooks/member';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PasswordModifyPage() {
  const navigate = useNavigate();
  const [state, dispatch] = usePwModifyForm();

  return (
    <PwModifyPageContainer>
      <Title>비밀번호 변경하기</Title>
      <Item>
        <Label>현재 비밀번호</Label>
        <CommonInput
          name='existPassword'
          value={state.existPassword}
          onChange={(e) =>
            dispatch({ type: 'existPassword', payload: e.target.value })
          }
        />
      </Item>
      <Item>
        <Label>변경 할 비밀번호</Label>
        <CommonInput name='newPassword' value={state.newPassword} />
      </Item>
      <Item>
        <Label>변경 할 비밀번호 확인</Label>
        <CommonInput
          name='newPasswordConfirm'
          value={state.newPasswordConfirm}
        />
      </Item>

      <BtnGroup>
        <Btn>확인</Btn>
        <Btn type='button' onClick={() => navigate(-1)}>
          취소
        </Btn>
      </BtnGroup>
    </PwModifyPageContainer>
  );
}

const PwModifyPageContainer = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor};
  gap: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
`;

const Label = styled.label``;

const CommonInput = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  width: 100%;
`;

const Item = styled.div`
  width: 100%;
`;

const Btn = styled.button`
  align-self: center;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0px 0px 4px black;
`;

const BtnGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
