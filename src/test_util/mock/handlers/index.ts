import * as auth from './auth';
import * as job from './job';

export const handlers = [...Object.values(auth), ...Object.values(job)];
