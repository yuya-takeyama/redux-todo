import React from 'react';

import FilterLink from '../containers/FilterLink';

const VisiblityFilter = () =>
  <div>
    <FilterLink filter={"All"} />
    {" / "}
    <FilterLink filter={"Incomplete"} />
    {" / "}
    <FilterLink filter={"Completed"} />
  </div>;

export default VisiblityFilter;
