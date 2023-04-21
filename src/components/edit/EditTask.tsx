import { useContext, useEffect, useState } from "react";
import "./editTask.scss";
import { TaskContext } from "../context/TaskContext";
import EditIcon from "../../assets/edit-icon-white.svg";
import {
  ITask,
  TaskStateType,
  allowedStatusChange,
  taskStateLabel,
} from "../../@types.tasks";

export const EditTask = () => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [status, setStatus] = useState<TaskStateType>("toDo");
  const { setSelectedTask, selectedTask, tasks, setTasks } =
    useContext(TaskContext);

  useEffect(() => {
    if (selectedTask) {
      setUpdatedTitle(selectedTask.title);
      setUpdatedDescription(selectedTask.description);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);

  const handleCancelEdit = () => setSelectedTask(undefined);

  const handleEditTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!updatedTitle && !updatedDescription) {
      return alert("The Title and Description fields are required");
    }
    if (selectedTask) {
      const updatedTask: ITask = {
        ...selectedTask,
        id: selectedTask?.id,
        title: updatedTitle,
        description: updatedDescription,
        status,
      };
      if (status === "done") {
        const deleteTask = tasks.filter((task) => task.id !== selectedTask.id);
        setTasks(deleteTask);
        setUpdatedDescription("");
        setUpdatedTitle("");
        setSelectedTask(undefined);
        return;
      }

      const updateExistingTask = tasks.map((task) =>
        task.id === selectedTask.id ? updatedTask : task
      );

      setTasks(updateExistingTask);
      setUpdatedDescription("");
      setUpdatedTitle("");
      setStatus("toDo");
      setSelectedTask(undefined);
    }
  };

  if (!selectedTask) {
    return null;
  }

  return (
    <div className="update-task-container">
      <div className="update-task-content">
        <form onSubmit={handleEditTask} className="update-input-form">
          <h1>Edit Task</h1>
          <input
            value={updatedTitle}
            onChange={(event) => setUpdatedTitle(event.target.value)}
            className="title-input"
            placeholder="Title"
          />
          <textarea
            rows={25}
            className="description-input"
            value={updatedDescription}
            onChange={(event) => setUpdatedDescription(event.target.value)}
            placeholder="Description"
          />
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as TaskStateType)}
            className="dropdown-options"
          >
            {allowedStatusChange[selectedTask.status].map((state, index) => (
              <option key={index} className="select-option" value={state}>
                {taskStateLabel[state as TaskStateType]}
              </option>
            ))}
          </select>
          <div className="edit-buttons">
            <button type="submit" className="edit-button">
              <img src={EditIcon} alt="" className="edit-icon" />
              <span>{status === "done" ? "Completed" : "Edit"}</span>
            </button>
            <button onClick={handleCancelEdit} className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
