// src/components/TodoItem.tsx
import React from 'react';
import { Checkbox, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Todo } from '../types/type';


// Props component này nhận từ cha
interface Props {
  todo: Todo;
  onToggle: (id: string) => void; // Function để toggle completed
  onDelete: (id: string) => void; // Function để xóa todo
}

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Checkbox để toggle completed */}
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)} // Gọi function từ cha, truyền id
        />
        
        {/* Text của todo */}
        <span style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#999' : 'black'
        }}>
          {todo.text}
        </span>
      </div>
      
      {/* Button xóa */}
      <Button
        type="text"
        danger
        icon={<DeleteOutlined />}
        onClick={() => onDelete(todo.id)} // Gọi function từ cha, truyền id
        size="small"
      />
    </div>
  );
}

export default TodoItem;