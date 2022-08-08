import { ITodo } from "./data";
export interface AddPanelProps {
  onTodoAdd: (data: ITodo) => void;
  onCompleteAll: () => void;
  onClearCompleted: () => void;
}