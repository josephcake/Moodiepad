import './App.css';
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {Navigation} from './containers/Navigation'

function App() {

  //check token, if token => Home 
  // else => Login

  let login = false
  return (  
    <div className="App">
      <Navigation/>
      App
      {
        login
        ?
        <Home/>
        :
        <Login/>
      }      
    </div>
  );
}

export default App;
