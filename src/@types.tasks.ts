export enum TaskState {
    Todo = "Todo",
    InProgress = "inProgress",
    InQa = "inQa",
    Done = "done",
  }
  

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: TaskState;
  }
  export type TodoContextType = {
    tasks: ITask[];
    saveTask: (todo: ITask) => void;
    updateTask: (id: number) => void;
  };