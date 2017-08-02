import request from 'superagent';

import { API_ROOT } from '../constants/API';
import * as types from '../constants/actionTypes/LikeActionTypes';


const requestLike = (id) => ({
    type: types.FETCH_LIKE_REQUEST,
    id
});

const errorLike = (id) => ({
    type: types.FETCH_LIKE_ERROR,
    id
});

const receiveLike = (id, likes) => ({
    type: types.FETCH_LIKE_SUCCESS,
    id,
    likes
});

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
