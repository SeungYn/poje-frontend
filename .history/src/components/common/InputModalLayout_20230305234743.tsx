import styled from 'styled-components';
import BeforeBtn from './BeforeBtn';

type PropsType = {
  headerText: string;
  beforeCallback: () => void;
  children: React.ReactNode;
};
export default function InputModalLayout({
  headerText,
  beforeCallback,
  children,
}: PropsType) {
  return (
    <Container>
      <Header>
        <BeforeBtn
          onClick={() => {
            beforeCallback();
          }}
        />
        <Title>{headerText}</Title>
        {children}
      </Header>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 5;
  inset: 0 0 0 0;
  background: ${({ theme }) => theme.modalBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const Title = styled.h2`
  margin: 0 auto;
`;
