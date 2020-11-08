import React, { useEffect, useState } from "react";
import axios from "axios";

export const History = ({user}) => {
  const [state, setState] = useState({
    historyMood: [],
    historyTask: [],
  });
  // debugger
  const { username, password } = user;
  useEffect(() => {
    axios
      .post("http://localhost:5000/users", {
        username: username,
        password: password,
      })
      .then((res) => {
        // send up data  in props to check if user is logged in
        console.log(res.data);
        // get history moods and tasks
        setState((prev) => ({
          historyMood: res.data.historyMood,
          historyTask: res.data.historyTask,
        }));
      });
  }, []);

  const renderMoods = (a) => {
    return state.historyMood.map((mood) => {
      return (
        <li key={Math.random()}>
          Morning rating: {mood.am} || Noon rating: {mood.noon} || Evening
          rating: {mood.pm}
        </li>
      );
    });
  };
  const renderTasks = (a) => {
    return state.historyTask.map((task) => {
      return (
        <li key={Math.random()}>
          Description: {task.task} || Completed: {Date()}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>history info</h1>
      <div>
        <h1>Moods</h1>
        <ul>{renderMoods()}</ul>
        <br />
      </div>
      <div>
        <h1>Tasks</h1>
        <ul>{renderTasks()}</ul>
      </div>
    </div>
  );
};
