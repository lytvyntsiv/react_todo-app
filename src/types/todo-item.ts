import { ITodo } from "./data";
export interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  onChangeTodos: (value: string, id: number) => void;
}