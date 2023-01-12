import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { AuthFormContainer } from './styledComponets';

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 없으신가요?</span>
      </TopSide>
    </AuthFormContainer>
  );
}

const TopSide = styled.div``;
