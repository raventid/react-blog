import { API_CALL } from 'middleware/API';
import * as types from '../constants/actionTypes/PostsActionTypes';

export function fetchPosts(term) {
    return {
        [API_CALL]: {
            endpoint: '/',
            method: 'GET',
            query: { term: term },
            types: [
                types.FETCH_POSTS_REQUEST,
                types.FETCH_POSTS_SUCCESS,
                types.FETCH_POSTS_ERROR,
            ]
        }
    };
}


