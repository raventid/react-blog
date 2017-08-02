import { connect } from 'react-redux';

import BlogList from 'components/widgets/blog/List';
import { like } from 'actions/Like';
import { flowRight } from 'lodash';

const actionToProps = (dispatch) => ({
  like: flowRight(dispatch, like)
});

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps, actionToProps)(BlogList);
