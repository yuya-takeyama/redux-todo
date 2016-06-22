import React from 'react';

export default class FilterLink extends React.Component {
  changeVisiblityFilter() {
    const { store } = this.context;

    store.dispatch({type: 'CHANGE_VISIBLITY_FILTER', filter: this.props.filter});
  }

  render() {
    const { currentFilter, filter } = this.props;

    if (currentFilter === filter) {
      return <span>{filter}</span>;
    } else {
      return (
        <a
          href="#"
          onClick={this.changeVisiblityFilter.bind(this)}
          >
          {filter}
        </a>);
    }
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object
};
