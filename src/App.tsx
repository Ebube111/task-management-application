import { useContext } from "react";
import "./App.scss";
import { AddTask, Tasks, EditTask } from "./components";
import { TaskContext } from "./components/context/TaskContext";

function App() {
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
          <EditTask />
        ) : (
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
