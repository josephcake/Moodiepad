import "./App.scss";
import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Navigation } from "./containers/Navigation";
import { Footer } from "./containers/Footer";
import { NavigationProvider } from "./context/NavigationContext";


function App() {
  const [state, setState] = useState({
    user: {},
    login: false,
  });

  const { user, login } = state;

  const userLogin = (obj) => {
    if (obj) {
      localStorage.token=JSON.stringify(obj)
      setState((prevState) => ({
        user: obj,
        login: !prevState.login,
      }));
    } else {
      alert("Wrong passsword or email");
    }
  };

  // console.log("this is the state", state)  
  return (
    <NavigationProvider>
      <div className="App">
        <Navigation />
        {
          login || localStorage.token
          ? 
          <Main user={state.user}/>           
          : 
          <Login userLogin={userLogin} />
        }
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
