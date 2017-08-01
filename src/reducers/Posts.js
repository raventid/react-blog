import { assign, map } from 'lodash';

import * as postsTypes from '../constants/actionTypes/PostsActionTypes';
import * as likeTypes from '../constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case postsTypes.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case postsTypes.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case postsTypes.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case likeTypes.FETCH_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case likeTypes.FETCH_LIKE_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_SUCCESS:
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
