import { ITodo } from '../../pages/fundamental/PropDrillingLiftingStateUp'

interface TodoCountProps {
  todos: ITodo[]
}

function TodoCount({ todos }: TodoCountProps) {
  return (
    <div>Count: {todos.length}</div>
  )
}

export default TodoCount