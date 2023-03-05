import { breakPoint } from '@src/styledComponents/media';
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
    <Background>
      <Content>
        <Header>
          <BeforeBtn
            onClick={() => {
              beforeCallback();
            }}
          />
          <Title>{headerText}</Title>
        </Header>
        {children}
      </Content>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  z-index: 5;
  inset: 0 0 0 0;
  background: ${({ theme }) => theme.modalBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  max-width: 480px;
  background: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  gap: 1rem;

  @media screen and (max-width: ${breakPoint.mm}) {
    width: 100%;
  }
`;

const Header = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const Title = styled.h2`
  position: absolute;
  margin: 0 auto;
`;
