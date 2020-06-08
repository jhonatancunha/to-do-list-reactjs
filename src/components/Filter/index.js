import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux-flow/reducers/visibilityFilter/actions';
import { setVisibilityFilter } from '../../redux-flow/reducers/visibilityFilter/action-creators';

// COMPONENTS
import FilterLink from './filter-link';

// STYLES
import { Wrapper, BtnNotCompleted, BtnFinished, Button } from './style';

const filterItems = [
  { label: 'TODOS', action: actions.SHOW_ALL, component: Button },
  {
    label: 'FINALIZADOS',
    action: actions.SHOW_COMPLETED,
    component: BtnFinished,
  },
  { label: 'ATIVOS', action: actions.SHOW_ACTIVE, component: BtnNotCompleted },
];

const Filter = ({ activeFilter, handleFilter }) => (
  <Wrapper>
    {filterItems.map((item) => (
      <FilterLink
        component={item.component}
        key={item.action}
        activeFilter={activeFilter}
        action={item.action}
        onClick={handleFilter(item.action)}
      >
        {item.label}
      </FilterLink>
    ))}
  </Wrapper>
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
