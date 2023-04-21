export const taskState = ["toDo", "inProgress", "inQa", "done"];

export const taskStateLabel = {
  toDo: "Todo",
  inProgress: "In Progress",
  inQa: "In QA",
  done:"Done",
}

export const allowedStatusChange = {
  toDo: ["toDo", "inProgress", "inQa", "done"],
  inProgress: ["inProgress", "inQa", "done"],
  inQa: ["inQa", "done"],
  done: [],
};

export type TaskStateType = "toDo" | "inProgress" | "inQa" | "done";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStateType;
}
export type TodoContextType = {
  tasks: ITask[];
  saveTask: (todo: ITask) => void;
  updateTask: (id: number) => void;
};
