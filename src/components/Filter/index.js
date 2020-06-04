import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux-flow/reducers/visibilityFilter/actions';
import { setVisibilityFilter } from '../../redux-flow/reducers/visibilityFilter/action-creators';

// COMPONENTS
import FilterLink from './filter-link';

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE },
];

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>

    {filterItems.map((item) => (
      <FilterLink
        key={item.action}
        activeFilter={activeFilter}
        action={item.action}
        onClick={handleFilter(item.action)}
      >
        {item.label}
      </FilterLink>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault();
    dispatch(setVisibilityFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
