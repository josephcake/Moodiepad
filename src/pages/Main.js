import React, { useContext } from "react";
import { HOME, TASK, HISTORY } from "../constant/navigation-constant";
import { NavigationContext } from "../context/NavigationContext";
import { Home } from "./Home";
import { TaskPage } from "./Task";
import { History } from "./History";

export const Main = (props) => {
  // debugger
  const { page, setPage } = useContext(NavigationContext);

  // console.log(NavigationContext)
  //   console.log(page, setPage, props);
  return (
    <div className="main">
      {page === TASK ? (
        <TaskPage />
      ) : page === HISTORY ? (
        <History user={props.user} />
      ) : (
        <Home />
      )}
    </div>
  );
};
