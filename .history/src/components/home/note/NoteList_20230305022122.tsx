import styled from 'styled-components';

export default function NoteList() {
  const data = [
    {
			"portfolioId": 3,
			"title": "명수의 포트폴리오"
			"nickname" : "유명수"
	},{
		"portfolioId": 3,
		"title": "명수의 포트폴리오"
		"nickname" : "유명수"
},{
	"portfolioId": 3,
	"title": "명수의 포트폴리오"
	"nickname" : "유명수"
},{
	"portfolioId": 3,
	"title": "명수의 포트폴리오"
	"nickname" : "유명수"
},
  ];
  return (
    <Container>
      <Title>쪽지함</Title>
      <NoteListUl>
        {data.map((item) => (
          <Note>{item.message}</Note>
        ))}
      </NoteListUl>
    </Container>
  );
}

const Container = styled.article`
  height: 100%;
  width: 100%;
`;

const Title = styled.h2``;

const NoteListUl = styled.ul`
  width: 100%;
  height: 100%;
`;

const Note = styled.li``;
