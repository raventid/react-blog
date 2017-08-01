import request from 'superagent';


import { API_ROOT } from '../constants/API';
import * as types from '../constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

const requestLike = (id) => ({
  type: types.FETCH_POSTS_LIKE_REQUEST,
  id
});

const errorLike = (id) => ({
  type: types.FETCH_POSTS_LIKE_ERROR,
  id
});

const receiveLike = (id, likes) => ({
  type: types.FETCH_POSTS_LIKE_SUCCESS,
  id,
  likes
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}

export function like(id) {
  return (dispatch) => {
    dispatch(requestLike(id));

    return request
      .post(`${API_ROOT}/posts/${id}`)
      .end((err,response) => {
        err ? dispatchEvent(errorLike()) : dispatch(receiveLike(id,
          response.body.meta.likes));
      });
  };
}
