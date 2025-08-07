import React from 'react';
import { Empty } from 'antd';
import TodoItem from './TodoItem';
import { Todo } from '../types/type';


// Props component này nhận từ cha
interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoList({ todos, onToggle, onDelete }: Props) {
  // Nếu không có todo nào, hiển thị Empty
  if (todos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <Empty description="No todos found" />
      </div>
    );
  }
  
  // Nếu có todos, render danh sách
  return (
    <div style={{
      border: '1px solid #f0f0f0',
      borderRadius: '6px',
      padding: '16px',
      backgroundColor: '#fff'
    }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Key bắt buộc cho list
          todo={todo}
          onToggle={onToggle} // Truyền function xuống con
          onDelete={onDelete} // Truyền function xuống con
        />
      ))}
    </div>
  );
}

export default TodoList;