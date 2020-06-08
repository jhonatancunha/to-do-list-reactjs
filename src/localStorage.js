export const loadStorage = () => {
  try {
    const todoList = localStorage.getItem('listTodo');

    if (!todoList) return undefined;
    return JSON.parse(todoList);
  } catch (err) {
    return undefined;
  }
};

export const saveStorage = (todoList) => {
  try {
    localStorage.setItem('listTodo', JSON.stringify(todoList));
  } catch (err) {}
};
