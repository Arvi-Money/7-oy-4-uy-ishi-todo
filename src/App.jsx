import { useRef } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const todos = useSelector(state => state.task.todos)
  const taskRef = useRef();
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (taskRef.current.value) {
      let tasks = {
        id: Date.now(),
        task: taskRef.current.value
      }
      dispatch({ type: 'ADD', payload: tasks })
      taskRef.current.value = ''; 
    }
  }

  function handleDelete(id) {
    dispatch({ type: 'REMOVE', payload: id })
  }
  return (
    <>
      <div className="container">
        <div className="todo-wrapper">
          <h1>TO DO LIST</h1>
          <hr />
          <input type="text" placeholder='add item..' ref={taskRef} />
          <button className="btn" onClick={handleClick}>ADD</button>
        </div>
      </div>

      <div className="tasks">
        {
          todos.length > 0 && todos.map((el, index) => {
            return (
              <div key={index} className="task">
                <p>{el.task}</p>
                <button className="btn" onClick={() => {handleDelete(el.id)}}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App;
