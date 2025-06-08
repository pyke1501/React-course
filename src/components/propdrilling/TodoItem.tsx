import { ITodo } from "../../pages/fundamental/PropDrillingLiftingStateUp"

interface TodoItemProps {
  todo: ITodo,
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      {todo.text}
      <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem