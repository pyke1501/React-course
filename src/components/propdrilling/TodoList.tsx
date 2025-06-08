import TodoItem from './TodoItem'
import { ITodo } from '../../pages/fundamental/PropDrillingLiftingStateUp'

interface TodoListProps {
  todos: ITodo[],
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
  console.log('todoLists')
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList