export const mockJobCategory = [
  { name: '개발자' },
  { name: '디자이너' },
  { name: '유승윤' },
];

export const mockPortfolioList = [
  {
    portfolioId: 0,
    title: '첫 번째 제목',
    description: '첫 번쨰 아이템 설명',
    backgroundImg: '첫 번째 아이템 이미지',
    nickName: '유승윤',
    profileImg: 'image.png',
    likeCount: 10,
  },
  {
    portfolioId: 1,
    title: '두 번째 제목',
    description: '두 번쨰 아이템 설명',
    backgroundImg: '두 번째 아이템 이미지',
    nickName: '유명수',
    profileImg: 'image.png',
    likeCount: 5,
  },
  {
    portfolioId: 2,
    title: '세 번째 제목',
    description: '세 번쨰 아이템 설명',
    backgroundImg: '세 번째 아이템 이미지',
    nickName: '유명윤',
    profileImg: 'image.png',
    likeCount: 1,
  },
];

export const mockPageging = {
  totalRecordCnt: 130, // 전체 데이터 수
  totalPageCnt: 11, // 전체 페이지 수
  startPage: 1, // 첫 페이지 번호
  endPage: 5, // 끝 페이지 번호
  prev: false, // 이전 페이지 표시 여부
  next: true,
  page: 1,
  currentPage: '1',
  path: 'test',
};
