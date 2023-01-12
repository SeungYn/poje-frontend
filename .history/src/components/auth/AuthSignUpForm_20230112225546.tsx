export default function AuthSignUpForm() {
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 없으신가요?</span>
        <MoveToLoginOrSignUpBtn>SIGN UP</MoveToLoginOrSignUpBtn>
      </TopSide>
      <Header>
        <h1>WelCome Back</h1>
        <p>Login your account</p>
      </Header>
      <AuthForm>
        <AuthLabel htmlFor='loginId'>
          <span>LoginId</span>
          <input type='text' id='loginId' placeholder='LoginId' />
        </AuthLabel>
        <AuthLabel htmlFor='password'>
          <span>Password</span>
          <input type='password' id='password' placeholder='password' />
        </AuthLabel>
        <LoginBtn>로그인</LoginBtn>
      </AuthForm>
    </AuthFormContainer>
  );
}
