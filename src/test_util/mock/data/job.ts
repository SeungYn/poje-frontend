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
  path: '/test',
};

export const mockAPIPortfolioList = {
  paging: {
    page: 1,
    totalRecordCnt: 1,
    totalPageCnt: 1,
    startPage: 1,
    endPage: 1,
    next: false,
    prev: false,
  },
  pfAndMemberResp: [
    {
      portfolioId: 3,
      title: '명수의 포트폴리오',
      description: '예비 백엔드 개발자의 포트폴리오입니다.',
      backgroundImg:
        'https://pojeawsbucket.s3.ap-northeast-2.amazonaws.com/portfolio/d75081b6-d43a-4fbf-aaa3-03dcc80ca4d1.PNG',
      nickName: '싸르',
      profileImg:
        'https://pojeawsbucket.s3.ap-northeast-2.amazonaws.com/profile/9ab46f45-3431-4098-a4da-69c2c21f877d.PNG',
      likeCount: 2,
    },
    {
      portfolioId: 2,
      title: '승윤의 포트폴리오',
      description: '예비 백엔드 개발자의 포트폴리오입니다.',
      backgroundImg:
        'https://pojeawsbucket.s3.ap-northeast-2.amazonaws.com/portfolio/d75081b6-d43a-4fbf-aaa3-03dcc80ca4d1.PNG',
      nickName: '싸르',
      profileImg:
        'https://pojeawsbucket.s3.ap-northeast-2.amazonaws.com/profile/9ab46f45-3431-4098-a4da-69c2c21f877d.PNG',
      likeCount: 2,
    },
  ],
};
