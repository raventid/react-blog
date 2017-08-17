import { connect } from 'react-redux';
import { fetchPosts } from 'actions/Posts';
import { flowRight } from 'lodash';

import SearchForm from 'components/widgets/blog/SearchForm';

const search = (term) => (
  fetchPosts(term)
);

const actionsToProps = (dispatch) => ({
  search: flowRight(dispatch, search)
});

export default connect(null, actionsToProps)(SearchForm);
