/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { connect } from 'react-redux';
import {
  toogleToDo,
  removeToDo,
} from '../../redux-flow/reducers/todos/action-creators';
import * as filterActions from '../../redux-flow/reducers/visibilityFilter/actions';

// STYLES
import { Wrapper, Line, TitleItem, DeleteButton } from './style';

// ICONS
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as Active } from '../../assets/active.svg';
import { ReactComponent as Completed } from '../../assets/checked.svg';

const getVisible = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter((item) => item.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter((item) => !item.completed),
  };

  return filterItems[activeFilter];
};

const TodosList = ({
  listTodos,
  handleToogleToDo,
  activeFilter,
  hadleRemoveToDo,
}) => (
  <Wrapper>
    {getVisible(listTodos, activeFilter).map((item) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <Line key={item.id}>
        {item.completed ? <Completed /> : <Active />}

        <TitleItem
          onClick={handleToogleToDo(item.id)}
          onKeyDown={handleToogleToDo(item.id)}
          status={item.completed}
        >
          {item.text}
        </TitleItem>
        <DeleteButton type="button" onClick={hadleRemoveToDo(item.id)}>
          <DeleteIcon />
        </DeleteButton>
      </Line>
    ))}
  </Wrapper>
);

const mapStateToProps = (state) => ({
  listTodos: state.todos,
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleToogleToDo: (id) => (e) => {
    dispatch(toogleToDo(id));
  },
  hadleRemoveToDo: (id) => (e) => {
    dispatch(removeToDo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
