import { Fragment, useContext } from "react";
import TaskCard from "../card/TaskCard";
import "./tasks.scss";
import { TaskContext } from "../context/TaskContext";

/**
  Represents a list of tasks
  @returns {JSX.Element} - The Tasks component
*/

export const Tasks = (): JSX.Element => {
  // Context variables
  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasks-container">
      <h1>Tasks</h1>
      <div className="task-inner-container">
        <div className="tasks-contents">
          {tasks.length >= 1 ? (
            // Render the task cards if there are tasks
            <>
              {tasks.map(({ title, description, status, id }) => (
                <Fragment key={id}>
                  <TaskCard
                    id={id}
                    title={title}
                    description={description}
                    status={status}
                  />
                </Fragment>
              ))}
            </>
          ) : (
            // Render a message if there are no tasks
            <div className="no-task">
              <span>You have nothing to do. go get some sleep</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
