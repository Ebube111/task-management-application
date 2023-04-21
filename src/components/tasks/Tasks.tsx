import { Fragment, useContext } from "react";
import TaskCard from "../card/TaskCard";
import "./tasks.scss";
import { TaskContext } from "../context/TaskContext";

export const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="tasks-container">
      <h1>Tasks</h1>
      <div className="task-inner-container">
        <div className="tasks-contents">
          {tasks.length >= 1 ? (
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
            <div className="no-task">
              <span>You have nothing to do, go get some sleep</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
