import React from "react";
import TodoCount from "../../components/propdrilling/TodoCount";
import TodoForm from "../../components/propdrilling/TodoForm";
import TodoList from "../../components/propdrilling/TodoList";

export interface ITodo {
  id: number,
  text: string
}

function PropDrillingLiftingStateUp() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  
  function addTodo(text: string) {
    const todoItem = {
      id: Date.now(),
      text
    }
    setTodos(prevState => [...prevState, todoItem])
  }

  function deleteTodo(id: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h1>PropDrilling-LiftingStateUp</h1>

      <div>
        <TodoForm addTodo={addTodo} />

        <br /><br />
        <TodoCount todos={todos} />

        <TodoList todos={todos} deleteTodo={deleteTodo} />

      </div>
    </div>
  )
}

export default PropDrillingLiftingStateUp;