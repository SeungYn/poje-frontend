export default function PortfolioMakeFormContainer() {
  return (
    <MakeFormContainer>
      <MakeForm>
        <BeforeButton
          color={styledTheme.mainColorDark}
          onClick={() => nav(-1)}
        />
        <FormTitle>포토폴리오 작성하기</FormTitle>
        <MagicDiv>
          <FormInput type='text' required />
          <PlaceHolder>이름을 입력해주세요</PlaceHolder>
        </MagicDiv>
        <MagicDiv>
          <FormInput type='text' required />
          <PlaceHolder>직업을 입력해주세요</PlaceHolder>
        </MagicDiv>
        <MagicDiv>
          <FormTextarea maxLength={50} rows={10} required />
          <TextAreaPlaceHolder>소개를 적어주세요(50자)</TextAreaPlaceHolder>
        </MagicDiv>

        <FormButton>작성하기</FormButton>
      </MakeForm>
    </MakeFormContainer>
  );
}

const MakeFormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 460px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
