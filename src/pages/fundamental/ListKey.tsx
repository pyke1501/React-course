import React from "react"

interface ITodo {
  id?: number,
  title: string
}

function ListKey() {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { title: 'tony' },
    { title: 'nguyen'}
  ]);

  const listTodos = todos.map((todo, index) => ({
    ...todo,
    id: todo.title + index
  })).map(todo => (
    <div key={todo.id}>Title: {todo.title}</div>
  ))

  console.log('listTodos: ', listTodos)
 
  
  return (
    <div>
      <h1 className="heading">ListKey</h1>
      <br />
      {listTodos}
    </div>
  )
}

export default ListKey;


