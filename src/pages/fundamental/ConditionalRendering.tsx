import React from 'react'
import Typography from '../../components/ui/typography';

/*
&& 
- vế trái là true thì lấy vế phải
- vế trái là false thì lấy vế trái

'truong' && 'tony' -> tony
'' && 'hai' -> ''
'hoang' && '' -> ''
'tony' && 'react' && 'hoang'  && '' -> ''

||:  nó sẽ lấy giá trị true đầu tiên 
'' || 'tony' -> tony
'tony' || '' -> tony
'' || tony || hoang -> tony
*/
interface ITodo {
  id: number,
  title: string
}

function ConditionalRendering() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

   const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: 'tony' + Date.now(),
    }
    setTodos(prevState => [...prevState, newTodo])
   }

  return (
    <div>
      <Typography 
        text="ConditionalRendering"
      />
       {todos.length > 0 && (
        <>
          {todos.map((todo) => (
            <div>Title: {todo.title}</div>
          ))}
        </>
      )}
      {/* {todos.length > 0 && (
        <>
          {todos.map((todo) => {
            return (
              <div>Title: {todo.title}</div>
            )
          })}
        </>
      )} */}
      {/* {todos.length > 0 ? (
        <>
          {todos.map((todo) => {
            return (
              <div>Title: {todo.title}</div>
            )
          })}
        </>
      ) : (
        <>
          Please click add todo
        </>
      )} */}
      <br />
      {/* <button onClick={() => increment(10)}>Increment {count}</button> */}
      <button onClick={addTodo}>Add Todos</button>
    </div>
  )
}

export default ConditionalRendering;

/*
hard skill: technical skill
  - html css js react ...
soft skill: communication, teamwork, management task, multiple task, target urgent, easy ..., resovle conflict when team work each other
*/