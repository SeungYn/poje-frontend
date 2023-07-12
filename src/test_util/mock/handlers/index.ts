import * as auth from './auth';
import * as job from './job';
import * as portfolio from './portfolio';

export const handlers = [
  ...Object.values(auth),
  ...Object.values(job),
  ...Object.values(portfolio),
];
