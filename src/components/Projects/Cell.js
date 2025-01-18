import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <div className="description">
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
