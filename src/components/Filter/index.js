import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux-flow/reducers/visibilityFilter/actions';
import { setVisibilityFilter } from '../../redux-flow/reducers/visibilityFilter/action-creators';

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE },
];

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>

    {filterItems.map((item) => {
      if (item.action === activeFilter) {
        return (
          <span style={{ margin: 5 }} key={item.action}>
            {item.label}
          </span>
        );
      }
      return (
        <button
          onClick={handleFilter(item.action)}
          type="button"
          style={{ margin: 5 }}
          key={item.action}
        >
          {item.label}
        </button>
      );
    })}
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
