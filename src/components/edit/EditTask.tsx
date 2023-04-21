import "./updateTask.scss";

export const EditTask = () => {
  return (
    <div className="update-task-container">
      <div className="update-task-content">
        <form className="update-input-form">
          <h1>Edit Task</h1>
          <input className="title-input" placeholder="Title" />
          <textarea
            rows={30}
            className="description-input"
            placeholder="Description"
          />
          <select className="dropdown-options">
            <option className="select-option" value="inProgress">inProgress</option>
            <option className="select-option" value="inQA">inQA</option>
            <option className="select-option" value="done">Done</option>
            <option className="select-option" value="ToDo">ToDo</option>
          </select>
          <div className="edit-buttons">
          <button className="edit-button">Edit</button>
          <button className="cancel-button">Cancel</button>        
          </div>
        </form>
      </div>
    </div>
  );
};
