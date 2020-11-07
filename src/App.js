<<<<<<< HEAD
import "./App.scss";
import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Navigation } from "./containers/Navigation";
import { Footer } from "./containers/Footer";

function App() {
  //check token, if token => Home
  // else => Login
  const [state, setState] = useState();

  let login = false;
  return (
    <div className="App">
      <Navigation />
      {login ? <Home /> : <Login />}
      <Footer />
    </div>
=======
import './App.scss';
import {Login} from './pages/Login'
import {Main} from './pages/Main'
import {Navigation} from './containers/Navigation'
import {Footer} from './containers/Footer'
import {NavigationProvider} from './context/NavigationContext'

function App() { 

  let login = true


  return (  
    <NavigationProvider>
      <div className="App">
        <Navigation/>
        {
          login
          ?
          <Main/>
          :
          <Login/>
        }  
        <Footer/>    
      </div>
    </NavigationProvider>

>>>>>>> master
  );
}

export default App;
