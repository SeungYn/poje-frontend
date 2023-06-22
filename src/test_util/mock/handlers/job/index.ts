import { rest } from 'msw';
import { mockJobCategory } from '../../data/job';

export const getJobCategory = rest.get(
  `${process.env.REACT_APP_END_POINT}/job`,
  (req, res, ctx) => {
    return res(ctx.json({ result: { jobInfoRespList: mockJobCategory } }));
  }
);
