import { useContext, useState } from "react";
import { ITask, TaskState } from "../../@types.tasks";
import { TaskContext } from "../context/TaskContext";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) {
      return alert("Please title or description cannot be empty");
    }
    const newTask: ITask = {
      id: tasks.length + 1,
      title,
      description,
      status: TaskState.Todo,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-task-container">
      <div className="add-section">
        <form className="add-input-form" onSubmit={handleCreateTask}>
          <h1>Add a new Task</h1>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
            placeholder="Description"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
