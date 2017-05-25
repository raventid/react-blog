import React from 'react';

const BoxWrapper = (props) => (
  React.createElement(
    "div",
    {
      style: {
        margin: "15px",
        border: "1px solid #333",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "50px",
        bordeBbottomLeftRadius: "0"
      }
    },
    props.children
  )
);

export default BoxWrapper;
