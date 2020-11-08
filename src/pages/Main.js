import React, { useContext } from "react";
import { HOME, TASK } from "../constant/navigation-constant";
import { NavigationContext } from "../context/NavigationContext";
import {UserProvider, UserContext} from "../context/UserContext"

import { Home } from "./Home";
import { TaskPage } from "./Task";

export const Main = () => {
  // debugger
  const { page, setPage } = useContext(NavigationContext);

  // console.log(NavigationContext)
  console.log(page, setPage);
  return( 
    <UserProvider>
      <UserContext.Consumer>
        {({user, setUser})=>{
          
          return <div className="main">{page === TASK ? <TaskPage /> : <Home />}</div>

        }}
      </UserContext.Consumer>
    </UserProvider>
  )
  ;
};
