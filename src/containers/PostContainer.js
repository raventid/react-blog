import { connect } from 'react-redux';

import Post from 'components/Post';
import { like } from 'actions/Post';
import { flowRight } from 'lodash';

const actionToProps = (dispatch) => ({
  like: flowRight(dispatch, like)
});

const stateToProps = (state) => ({
  item: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps, actionToProps)(Post);