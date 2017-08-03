import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './Item';
import ChartContainer from 'containers/ChartContainer';


const List = ({ items }) => (
    <div>
        { items.map(item => <BlogItem {...item} key={item.id} />) }
    </div>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
    items: [],
};

export default List;
