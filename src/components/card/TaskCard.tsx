import { useContext } from "react";
import { ITask, TaskStateType, taskStateLabel } from "../../@types.tasks";
import EditIcon from "../../assets/edit-icon.svg";
import "./taskCard.scss";
import { TaskContext } from "../context/TaskContext";

/**
 * TaskCard component displays the task details in a card format.
 * @param {Object} props - The task object containing title, description, status, and id.
 * @param {string} props.title - The title of the task.
 * @param {string} props.description - The description of the task.
 * @param {string} props.status - The status of the task.
 * @param {number} props.id - The ID of the task.
 * @returns {JSX.Element} - The TaskCard component.
 */

const TaskCard = ({ title, description, status, id }: ITask): JSX.Element => {
  const { setSelectedTask } = useContext(TaskContext);

  /**
   * Truncates text if it is longer than the specified character length.
   * @param {string} text - The text to truncate.
   * @param {number} maxCharacters - The maximum number of characters to show before truncating.
   * @returns {string} - The truncated text.
   */
  const truncateText = (text: string, maxCharacters = 70): string => {
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
        <button className="card-button">
          {taskStateLabel[status as TaskStateType]}
        </button>
        <img onClick={handleSelectTask} alt="" src={EditIcon} />
      </div>
    </div>
  );
};

export default TaskCard;
