import { rest } from 'msw';

export const loginDuplicate = rest.get(
  `${process.env.REACT_APP_END_POINT}/loginId/:loginId`,
  (req, res, ctx) => {
    return res(
      ctx.json({ code: 200, message: '사용할 수 있는 아이디입니다.' })
    );
  }
);
