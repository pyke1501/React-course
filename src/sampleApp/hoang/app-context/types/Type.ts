// Cấu trúc 1 todo
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Loại filter
export type FilterType = 'all' | 'completed';