import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Container } from './modifyCommonStyledComponent';

type PropType = {
  handleSubmit: () => void;
  isModify: boolean;
};

export default function ModifyComfirmAndCancleGroup({
  handleSubmit,
  isModify,
}: PropType) {
  const [isModify, setIsModify] = useRecoilState(
    isModifyModeFromPortfolioIntro
  );

  const onSubmit = () => {
    handleSubmit();
  };

  if (!isModify) return <></>;

  return (
    <Container>
      <ComfirmButton type={'submit'}>확인</ComfirmButton>
      <CancleButton onClick={() => setIsModify((e) => !e)}>취소</CancleButton>
    </Container>
  );
}

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;

const ComfirmButton = styled(CommomButton)``;

const CancleButton = styled(CommomButton)`
  margin-left: 0.8rem;
`;
