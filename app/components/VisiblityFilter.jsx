import React from 'react';

import FilterLink from './FilterLink';

export default class VisiblityFilter extends React.Component {
  render() {
    const currentFilter = this.props.visiblityFilter;

    return (
      <div>
        <FilterLink currentFilter={currentFilter} filter={"All"} />
        {" / "}
        <FilterLink currentFilter={currentFilter} filter={"Incomplete"} />
        {" / "}
        <FilterLink currentFilter={currentFilter} filter={"Completed"} />
      </div>
    );
  }
}
