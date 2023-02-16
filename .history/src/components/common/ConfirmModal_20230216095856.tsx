import useConfirmModal from '@src/hooks/common/useConfirmModal';
import { breakPoint } from '@src/styledComponents/media';
import styled from 'styled-components';

export default function ConfirmModal() {
  const { isOpen, confirmModal, cancelModal, modalContent } = useConfirmModal();
  if (!isOpen) return <></>;
  return (
    <Container>
      <Modal>
        <Message>{modalContent.message}</Message>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '1rem',
          }}
        >
          <ConfirmBtn onClick={confirmModal}>확인</ConfirmBtn>
          <ConfirmBtn onClick={cancelModal}>취소</ConfirmBtn>
        </div>
      </Modal>
    </Container>
  );
}
const Container = styled.section`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.modalBackgroundColor};
`;

const Modal = styled.div`
  padding: 2rem 2rem;
  width: 50%;
  border: 1px solid ${({ theme }) => theme.bgSemiDarkColor};
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: ${breakPoint.mmm}) {
    width: 100%;
  }
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontMiddleSize};
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.textColor};
  word-break: normal;
`;

const ConfirmBtn = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${({ theme }) => theme.bgSemiDarkColor};
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
`;
