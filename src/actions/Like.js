import { API_CALL } from 'middleware/API';
import * as types from '../constants/actionTypes/LikeActionTypes';

export function like(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'POST',
      query: {},
      types: [
        types.FETCH_LIKE_REQUEST,
        types.FETCH_LIKE_SUCCESS,
        types.FETCH_LIKE_ERROR,
      ]
    }
  };
}

