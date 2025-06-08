import React from 'react'

interface TodoFormProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = React.useState('');
  
  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  console.log('text', text)


  return (
    <div>
      Todo: 
      <input type="text" onChange={onChangeTitle} />
      <button type="button" onClick={() => addTodo(text)}>Add Todo</button>
    </div>
  )
}

export default TodoForm