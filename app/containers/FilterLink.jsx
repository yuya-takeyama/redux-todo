import { connect } from 'react-redux';
import Link from '../components/Link.jsx';
import { changeVisiblityFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    currentFilter: state.visiblityFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFilterLink: (filter) => {
      dispatch(changeVisiblityFilter(filter));
    },
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
