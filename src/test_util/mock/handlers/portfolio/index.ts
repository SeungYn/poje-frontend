import { rest } from 'msw';
import { mockPortfolioIntro } from '../../data/portfolio';

export const getPortfolioIntro = rest.get(
  `${process.env.REACT_APP_END_POINT}/member/portfolio/:portfolioId`,
  (req, res, ctx) => {
    return res(ctx.json({ result: mockPortfolioIntro }));
  }
);

export const modifyPortfolioIntro = rest.put(
  `${process.env.REACT_APP_END_POINT}/member/portfolio/:portfolioId`,
  (req, res, ctx) => {
    return res(ctx.json({ result: mockPortfolioIntro }));
  }
);
