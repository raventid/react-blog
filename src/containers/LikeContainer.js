import { connect } from 'react-redux';

import Like from 'components/widgets/blog/elements/Like';
import { like } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  likes: state.posts.entries.find(post => post.id == ownProps.postId).meta.likes
});

const actionsToProps = (dispatch, ownProps) => ({
  like: () => dispatch(like(ownProps.postId))
});

export default connect(stateToProps, actionsToProps)(Like);
