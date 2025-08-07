import React, { useState, useEffect } from 'react';
import { Card, Typography } from 'antd';
import AddTodo from './AddTodo';
import FilterTabs from './FilterTabs';
import TodoList from './TodoList';
import { FilterType, Todo } from '../types/type';


const { Title } = Typography;

function TodoTracker() {
  // 3 state chính của app
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchText, setSearchText] = useState('');
  
  // Load todos từ localStorage 
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);
  
  // Save todos vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 
  
  const generateId = (): string => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };
  
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text: text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };
  
  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // Tạo todo mới với completed đảo ngược
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  
  const deleteAllTodos = () => {
    setTodos([]);
  };
  
  const getFilteredTodos = (): Todo[] => {
    let filteredTodos = todos;
    
    if (filter === 'completed') {
      filteredTodos = filteredTodos.filter(todo => todo.completed);
    }
    
    if (searchText) {
      filteredTodos = filteredTodos.filter(todo =>
        todo.text.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    return filteredTodos;
  };
  
  const filteredTodos = getFilteredTodos();
  
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Title level={2} style={{ margin: 0, textAlign: 'center' }}>
              🐧 Todo Tracker
            </Title>
            
            {/* Component thêm todo */}
            <AddTodo onAdd={addTodo} />
            
            {/* Component filter và search */}
            <FilterTabs
              currentFilter={filter}
              onFilterChange={setFilter}
              searchText={searchText}
              onSearchChange={setSearchText}
              onDeleteAll={deleteAllTodos}
              todoCount={todos.length}
            />
            
            {/* Component hiển thị danh sách */}
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TodoTracker;