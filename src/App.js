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
<<<<<<< HEAD
=======

>>>>>>> master
    login: false,
  });

  const { user, login } = state;

  const userLogin = (obj) => {
    if (obj) {
      localStorage.token="logged"

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
<<<<<<< HEAD
        {login ? <Main user={state.user} /> : <Login userLogin={userLogin} />}
=======
        {
          login || localStorage.token === "logged"
          ? 
          <Main /> 
          : 
          <Login userLogin={userLogin} />}
>>>>>>> master
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
