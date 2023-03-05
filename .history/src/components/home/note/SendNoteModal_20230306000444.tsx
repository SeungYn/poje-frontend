import InputModalLayout from '@src/components/common/InputModalLayout';
import styled from 'styled-components';

export default function SendNoteModal() {
  return (
    <InputModalLayout headerText='쪽지 보내기' beforeCallback={() => {}}>
      <SendNoteForm>
        <TextArea maxLength={50} />
        <SendBtn>보내기</SendBtn>
      </SendNoteForm>
    </InputModalLayout>
  );
}

const SendNoteForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 400px;
  width: 100%;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 0.4rem;
`;

const SendBtn = styled.button`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  background-color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  box-shadow: 0 0 2px;
`;
