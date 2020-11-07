import './App.css';
import {Login} from './pages/Login'
import {Home} from './pages/Home'

function App() {

  //check token, if token => Home 
  // else => Login
  return (  
    <div className="App">
      App
      <Login>
        
      </Login>
    </div>
  );
}

export default App;
