import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../actions/types';

export default handleActions({
  [INCREMENT]: (state, { payload }) => ({
    number: state.number + payload,
  }),

  [DECREMENT]: (state, { payload }) => ({
    number: state.number - payload,
  }),

}, { number: 0 });
