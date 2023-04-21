import React, { createContext, useState, ReactNode } from "react";
import { ITask, TaskState } from "../../@types.tasks";

type TodoContextType = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  selectedTask: object;
  setSelectedTask: React.Dispatch<React.SetStateAction<object>>;
};

export const TaskContext = createContext<TodoContextType>({
  tasks: [],
  setTasks: () => null,
  selectedTask: {},
  setSelectedTask: () => null,
});

type TodoProviderProps = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: TodoProviderProps) => {
  const [selectedTask, setSelectedTask] = useState({});
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
