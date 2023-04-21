import { render, screen, fireEvent } from "@testing-library/react";
import { TaskContext } from "../context/TaskContext";
import { AddTask } from "../add/addTask";
import { ITask } from "../../@types.tasks";

test("clicking add button creates a new task", () => {
  const tasks: ITask[] = [];
  const setTasks: React.Dispatch<React.SetStateAction<ITask[]>> = jest.fn();
  const selectedTask: ITask | undefined = undefined;
  const setSelectedTask: React.Dispatch<
    React.SetStateAction<ITask | undefined>
  > = jest.fn();
  render(
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      <AddTask />
    </TaskContext.Provider>
  );

  // Use a fixed value for the ID
  const mockDateNow = jest
    .spyOn(Date, "now")
    .mockImplementation(() => 123456789);

  const titleInput = screen.getByPlaceholderText("Title");
  const descriptionInput = screen.getByPlaceholderText("Description");
  const addButton = screen.getByRole("button", { name: /add/i });

  fireEvent.change(titleInput, { target: { value: "Test Task" } });
  fireEvent.change(descriptionInput, { target: { value: "Test Description" } });
  fireEvent.click(addButton);

  expect(setTasks).toHaveBeenCalledWith([
    {
      id: 123456789,
      title: "Test Task",
      description: "Test Description",
      status: "toDo",
    },
  ]);

  mockDateNow.mockRestore();
});
