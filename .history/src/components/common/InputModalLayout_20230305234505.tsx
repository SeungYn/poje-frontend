import styled from 'styled-components';

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
  return <Container></Container>;
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
