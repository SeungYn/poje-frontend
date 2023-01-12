import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';
import { AuthFormContainer } from './styledComponets';

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 없으신가요?</span>
        <MoveToLoginOrSignUpBtn>SignUp</MoveToLoginOrSignUpBtn>
      </TopSide>
    </AuthFormContainer>
  );
}

const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-right: 0.6rem;
  }
`;

const MoveToLoginOrSignUpBtn = styled(CommonBtn)`
  box-shadow: 1px 1px 1px 1px gray;
`;
