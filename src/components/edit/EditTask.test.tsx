import { render, screen, fireEvent } from "@testing-library/react";
import { TaskContext } from "../context/TaskContext";
import "@testing-library/jest-dom/extend-expect";
import { ITask } from "../../@types.tasks";
import { EditTask } from "./EditTask";

const mockSelectedTask: ITask = {
  id: 1,
  title: "Task 1",
  description: "Task 1 Description",
  status: "toDo",
};

const mockTasks: ITask[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 Description",
    status: "toDo",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 Description",
    status: "inProgress",
  },
];

const mockSetSelectedTask = jest.fn();
const mockSetTasks = jest.fn();
// const tasks = mockTasks

describe("EditTask component", () => {
  beforeEach(() => {
    render(
      <TaskContext.Provider
        value={{
          setSelectedTask: mockSetSelectedTask,
          selectedTask: mockSelectedTask,
          tasks: mockTasks,
          setTasks: mockSetTasks,
        }}
      >
        <EditTask />
      </TaskContext.Provider>
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders the EditTask component with initial values", () => {
    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const statusSelect = screen.getByDisplayValue("Todo");
    const editButton = screen.getByText("Edit");
    const cancelButton = screen.getByText("Cancel");

    expect(titleInput).toHaveValue(mockSelectedTask.title);
    expect(descriptionInput).toHaveValue(mockSelectedTask.description);
    expect(statusSelect).toHaveValue(mockSelectedTask.status);
    expect(editButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("updates task title and description when input fields are changed", () => {
    const newTitle = "New Task Title";
    const newDescription = "New Task Description";

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");

    fireEvent.change(titleInput, { target: { value: newTitle } });
    fireEvent.change(descriptionInput, { target: { value: newDescription } });

    expect(titleInput).toHaveValue(newTitle);
    expect(descriptionInput).toHaveValue(newDescription);
  });

  test("does not submit form when title and description fields are empty", () => {
    const editButton = screen.getByText("Edit");
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "" },
    });
    fireEvent.click(editButton);

    expect(alertSpy).toHaveBeenCalled();
    expect(mockSetTasks).not.toHaveBeenCalled();
    expect(mockSetSelectedTask).not.toHaveBeenCalled();

    alertSpy.mockRestore();
  });

  test("deletes task and clears form when status is set to done", () => {
    const statusSelect = screen.getByDisplayValue("Todo");
    const editButton = screen.getByText("Edit");

    fireEvent.change(statusSelect, { target: { value: "done" } });
    fireEvent.click(editButton);

    expect(mockSetTasks).toHaveBeenCalledWith(
      mockTasks.filter((task) => task.id !== mockSelectedTask.id)
    );
    expect(screen.getByPlaceholderText("Title")).toHaveValue("");
    expect(screen.getByPlaceholderText("Description")).toHaveValue("");
    expect(mockSetSelectedTask).toHaveBeenCalledWith(undefined);
  });
});
