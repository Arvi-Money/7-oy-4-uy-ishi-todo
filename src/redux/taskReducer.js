const defaultState = {
  todos: []
};

export function taskReducer(state = defaultState, actions) {
  if (actions.type === "ADD") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied.push(actions.payload);
    return { ...state, todos: copied };
  } else if (actions.type === "REMOVE") {
    let copied = JSON.parse(JSON.stringify(state.todos));
    copied = copied.filter((el) => {
      return el.id !== actions.payload;
    });
    return { ...state, todos: copied };
  } else {
    return state;
  }
}

export default taskReducer;
