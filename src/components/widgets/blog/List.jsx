import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './Item';
import ChartContainer from 'containers/ChartContainer';


const List = ({ items, like }) => (
    <div>
        { items.map(item => <BlogItem {...item} key={item.id} like={like} />) }
    </div>
);

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    like: PropTypes.func.isRequired,
};

List.defaultProps = {
    items: [],
};

export default List;
