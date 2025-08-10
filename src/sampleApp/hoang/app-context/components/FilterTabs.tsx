// src/components/FilterTabs.tsx
import React from 'react';
import { Tabs, Input, Button } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { FilterType, Todo } from '../types/type';



// Props component này nhận từ cha
interface Props {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchText: string;
  onSearchChange: (text: string) => void;
  onDeleteAll: () => void;
  todoCount: number; // Để disable Delete All khi không có todo
}

function FilterTabs({ 
  currentFilter, 
  onFilterChange, 
  searchText, 
  onSearchChange, 
  onDeleteAll,
  todoCount 
}: Props) {
  
  // Tabs data
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'completed', label: 'Completed' }
  ];
  
  return (
    <div style={{ marginBottom: '16px' }}>
      {/* Tabs All/Completed */}
      <Tabs
        activeKey={currentFilter}
        onChange={(key) => onFilterChange(key as FilterType)}
        items={tabs}
        style={{ marginBottom: '16px' }}
      />
      
      {/* Search và Delete All */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Input
          placeholder="Search todos"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<SearchOutlined />}
          style={{ width: '250px' }}
        />
        
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={onDeleteAll}
          disabled={todoCount === 0} // Disable khi không có todo
        >
          Delete All
        </Button>
      </div>
    </div>
  );
}

export default FilterTabs;