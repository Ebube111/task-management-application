import { useContext } from "react";
import { ITask } from "../../@types.tasks";
import EditIcon from "../../assets/edit-icon.svg";
import "./taskCard.scss";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ title, description, status, id }: ITask) => {
  const { setSelectedTask } = useContext(TaskContext);

  const truncateText = (text: string, maxCharacters = 80) => {
    if (text?.length > maxCharacters) {
      return text.substring(0, maxCharacters) + "...";
    } else return text;
  };

  const handleSelectTask = () => {
    setSelectedTask({
      id,
      title,
      description,
      status,
    });
  };

  return (
    <div className="task-card-container">
      <div className="task-card-text-section">
        <h1>{title}</h1>
        <span>{truncateText(description)}</span>
      </div>
      <div className="task-card-footer">
        <button className="card-button">{status}</button>
        <img onClick={handleSelectTask} alt="" src={EditIcon} />
      </div>
    </div>
  );
};

export default TaskCard;
