
export const AddTask = () => {
  return (
    <div className="add-task-container">
      <div className="add-section">
          <form className="add-input-form">
              <h1>Add a new Task</h1>
              <input className="title-input" placeholder="Title" />
              <textarea className="description-input" placeholder="Description" />
              <button className="add-button">Add</button>
          </form>
      </div>
    </div>
  )
}
