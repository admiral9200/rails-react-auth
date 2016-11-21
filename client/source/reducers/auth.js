import {
  USER_ACCESS_REQUESTED,
  USER_LOGED_OUT
} from 'constants';

import { auth } from 'utilities/auth';

let initialState = auth.all() || {};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case USER_ACCESS_REQUESTED:
      auth.set(action.payload);
      return Object.assign({}, action.payload);
    case USER_LOGED_OUT:
      auth.clear();
      return Object.assign({});
    default:
      return state;
  }
}
