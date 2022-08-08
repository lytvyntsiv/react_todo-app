export interface ITodoFiltersProps {
  allTodos: number;
  onCompleted: (filterType: string) => void;
  onUnCompleted: (filterType: string) => void;
  onAllTodos: (filterType: string) => void;
}