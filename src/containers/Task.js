import React, { useEffect, useState } from "react";
import { TaskItem } from "../components/TaskItem";
import axios from "axios";

export const Task = (props) => {
  const { _id, username, dailytask } = props.user;
  const [input, setInput] = useState();
  const [taskList, setTaskList] = useState([
    {
      value: "dummy",
      completed: false,
    },
    {
      value: "data",
      completed: false,
    },
    {
      value: "test",
      completed: false,
    },
    {
      value: "strike",
      completed: false,
    },
  ]);

  const checkList = (value) => {
    if (!value.trim().length) {
      return setInput("");
    }
    if (!value === undefined) {
      return;
    }

    let newTask = {
      value: value,
      completed: false,
    };

    console.log("from  inside the checklist", value);
    // put this inside the return of the fetch request
    axios.put("http://localhost:5000/users/update/:id");
    setTaskList([...taskList, newTask]);
  };

  const deleteTaskList = (e) => {
    let newTaskList = taskList;
    let completedTask = newTaskList.find((task) => {
      return task.value === e.target.innerText;
    });
    completedTask.completed = true;
    // console.log(taskList)
    // setTaskList((ps)=>{
    //     return newTaskList
    // })
  };

  console.log("from the task.js", props.user._id);
  return (
    <div className="task-container">
      <div className="task-container__inner">
        <div className="task-container__date">today's date</div>
        <div className="task-container__add-task">
          <input
            type="text"
            placeholder="What to do?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                checkList(input);
              }
            }}
          />
        </div>
      </div>

      <div className="task-container__tasks">
        {taskList.map((data) => (
          <TaskItem data={data} deleteTaskList={deleteTaskList} />
        ))}
      </div>
    </div>
  );
};
