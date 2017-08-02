import { assign } from 'lodash';

import * as postTypes from '../constants/actionTypes/PostActionTypes';
import * as likeTypes from '../constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case postTypes.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case postTypes.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.FETCH_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case likeTypes.FETCH_LIKE_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_SUCCESS:
      if(state.entry) {
        return assign({}, state, {
          entry: assign({}, state.entry, {
            meta: assign({}, state.entry.meta, {
              likes: action.likes
              })
            })
          });
      }
      return assign({}, state, {})
    default:
      return state;
  }
}
