import React, { createContext, useState, ReactNode } from "react";
import { ITask, TaskState } from "../../@types.tasks";



type TodoContextType = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

export const TaskContext = createContext<TodoContextType>({
  tasks: [],
  setTasks: () => {},
});

type TodoProviderProps = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: TodoProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([
    {id: 1, status: TaskState.Todo, title: "Title goes here", description: "Task Description goes here, if text size is more than 3 paragraphs, it is trimed"},
    {id: 1, status: TaskState.Todo, title: "Title goes here", description: "Task Description goes here, if text size is more than 3 paragraphs, it is trimed"},
    {id: 1, status: TaskState.Todo, title: "Title goes here", description: "Task Description goes here, if text size is more than 3 paragraphs, it is trimed"},
    {id: 1, status: TaskState.Todo, title: "Title goes here", description: "Task Description goes here, if text size is more than 3 paragraphs, it is trimed"},


  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

