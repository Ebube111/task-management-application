import React, { createContext, useState, ReactNode } from "react";
import { ITask } from "../../@types.tasks";

type TodoContextType = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  selectedTask: ITask | undefined;
  setSelectedTask: React.Dispatch<React.SetStateAction<ITask | undefined>>;
};

export const TaskContext = createContext<TodoContextType>({
  tasks: [],
  setTasks: () => null,
  selectedTask: undefined,
  setSelectedTask: () => null,
});

type TodoProviderProps = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: TodoProviderProps) => {
  const [selectedTask, setSelectedTask] = useState<ITask>();
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
