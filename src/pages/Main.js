import React, { useContext } from "react";
import { HOME, TASK, HISTORY } from "../constant/navigation-constant";
import { NavigationContext } from "../context/NavigationContext";
import { UserProvider, UserContext } from "../context/UserContext";

import { Home } from "./Home";
import { TaskPage } from "./Task";
import { History } from "./History";

export const Main = (props) => {
  // debugger
  const { page, setPage } = useContext(NavigationContext);

  // console.log(NavigationContext)
  console.log("from the main", page, setPage, props);
  return (
    <div className="main">
      {page === TASK ? (
        <TaskPage />
      ) : page === HISTORY ? (
        <History user={props.user} />
      ) : (
        <Home user={props.user} />
      )}
    </div>
  );
};
