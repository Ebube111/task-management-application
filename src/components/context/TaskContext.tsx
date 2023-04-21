import React, { createContext, useState, ReactNode } from "react";
import { ITask, TaskState } from "../../@types.tasks";

type TodoContextType = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  selectedTask: object;
  setSelectedTask: React.Dispatch<React.SetStateAction<ITask | object>>;
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
  const [selectedTask, setSelectedTask] = useState<ITask>({});
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      status: TaskState.InProgress,
      title: "Title goes here",
      description:
        "Task Description goes here, if text size is more than 3 paragraphs, it is trimed",
    },
  ]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
