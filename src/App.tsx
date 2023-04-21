import { useContext, useState } from "react";
import "./App.scss";
import { AddTask, Tasks, EditTask } from "./components";
import { TaskContext } from "./components/context/TaskContext";

function App() {
  const { selectedTask } = useContext(TaskContext);
  const currentTab = Object.keys(selectedTask).length > 0;
  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="header-text">
          Task Management {">"} {currentTab ? "Edit" : "Home"}
        </h1>
      </div>
      <section className="contents">
        {currentTab ? (
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
