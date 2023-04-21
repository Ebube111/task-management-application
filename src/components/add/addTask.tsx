import { useContext, useState } from "react";
import { ITask } from "../../@types.tasks";
import { TaskContext } from "../context/TaskContext";
import PlusIcon from "../../assets/white-plus-icon.svg";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description) {
      return alert("Title and description are required fields");
    }
    const newTask: ITask = {
      id: Date.now(),
      title,
      description,
      status: "toDo",
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
            <img src={PlusIcon} alt="" className="plus-icon" />
            <span>Add</span>
          </button>
        </form>
      </div>
    </div>
  );
};
