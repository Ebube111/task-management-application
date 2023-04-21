import { useContext } from "react";
import "./App.scss";
import { AddTask, Tasks, EditTask } from "./components";
import { TaskContext } from "./components/context/TaskContext";

function App() {
  // Accessing the selectedTask from TaskContext
  const { selectedTask } = useContext(TaskContext);
  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="header-text">
          Task Management {">"} {selectedTask ? "Edit" : "Home"}
        </h1>
      </div>
      <section className="contents">
        {selectedTask ? (
          // Render the EditTask component when a task is selected
          <EditTask />
        ) : (
          // Render the AddTask and Tasks components when no task is selected
          <>
            <AddTask />
            <Tasks />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
