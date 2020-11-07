import "./App.scss";
import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Navigation } from "./containers/Navigation";
import { Footer } from "./containers/Footer";
import { NavigationProvider } from "./context/NavigationContext";

function App() {
  let login = false;

  return (
    <NavigationProvider>
      <div className="App">
        <Navigation />
        {login ? <Main /> : <Login />}
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
