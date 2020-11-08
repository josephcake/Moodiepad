import React, { useEffect, useState } from "react";

export const TaskItem = ({ data, deleteTaskList }) => {
  //   console.log("in side tasktime", deleteTaskList);
  const [completed, setCompleted] = useState(data.completed);

  const updateBothStates = (e) => {
    deleteTaskList(e);
    setCompleted(!completed);
  };
  return (
    <div
      className={`${data.completed ? "task__completed" : "task"}`}
      onClick={(e) => updateBothStates(e)}
    >
      {data.value}
    </div>
  );
};
