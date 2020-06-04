import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux-flow/reducers/visibilityFilter/actions';

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE },
];

const Filter = ({ activeFilter }) => (
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
        <button type="button" style={{ margin: 5 }} key={item.action}>
          {item.label}
        </button>
      );
    })}

    {/* <span>Todos </span> | <a href="#"> Finalizados </a> |
    <a href="#"> A fazer </a> */}
  </div>
);

// const filterItems = ['Todos', 'Finalizados', 'A fazer'];

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
