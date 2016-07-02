import React, { PropTypes } from 'react';

const Link = ({ filter, currentFilter, onClickFilterLink }) => {
  if (currentFilter === filter) {
    return <span>{filter}</span>;
  }

  return (
    <a
      href="#"
      onClick={() => onClickFilterLink(filter)}
      >
      {filter}
    </a>
  );
};

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onClickFilterLink: PropTypes.func.isRequired,
};

export default Link;
