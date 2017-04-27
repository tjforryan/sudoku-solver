import { createAction } from 'redux-actions';

import {
  INCREMENT,
  DECREMENT,
} from './types';

export const incrementNumber = createAction(INCREMENT);

export const decrementNumber = createAction(DECREMENT);
