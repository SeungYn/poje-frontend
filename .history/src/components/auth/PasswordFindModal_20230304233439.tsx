import styled from 'styled-components';

export default function PasswordFindModal() {
  return (
    <PasswordContainer>
      <PwFindForm></PwFindForm>
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
  width: 50%;
  max-width: 480px;
  height: 70%;
  max-height: 764px;
  background: white;
  border-radius: 1rem;
`;

const Title = styled.h2``;
