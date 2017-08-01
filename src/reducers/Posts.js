import { assign, map } from 'lodash';

import * as types from '../constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.FETCH_POSTS_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_LIKE_SUCCESS:
      return assign({}, state,
        {
          entries: map(state.entries, (post) => {
            if (post.id == action.id) {
              return assign({}, post, {
                meta: assign({}, post.meta, {
                  likes: action.likes
                })
              });
            }

            return post;
          })
        }
      );
    default:
      return state;
  }
}
