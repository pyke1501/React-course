import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface Props {
  onAdd: (text: string) => void; // Function để thêm todo mới
}

function AddTodo({ onAdd }: Props) {
  // State local cho input 
  const [inputText, setInputText] = useState('');
  
  // Function xử lý khi click Add
  const handleAdd = () => {
    if (inputText.trim()) { // Kiểm tra không rỗng
      onAdd(inputText.trim()); // Gọi function từ cha
      setInputText(''); // Clear input sau khi thêm
    }
  };
  
  // Function xử lý khi nhấn Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };
  
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <Input
        placeholder="Please enter todo"
        value={inputText} // Controlled input
        onChange={(e) => setInputText(e.target.value)} // Update state khi gõ
        onKeyPress={handleKeyPress} // Xử lý Enter
        style={{ flex: 1 }}
      />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}

export default AddTodo;