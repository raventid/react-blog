import { connect } from 'react-redux';
import { map } from 'lodash';

import PieChart from 'components/widgets/blog/PieChart';

const stateToProps = (state) => ({
  columns: map(state.posts.entries,(item) => ([item.text, item.meta.count])),
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(PieChart);
