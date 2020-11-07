import './App.scss';
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {Navigation} from './containers/Navigation'
import {Footer} from './containers/Footer'

function App() {

  //check token, if token => Home 
  // else => Login

  let login = false
  return (  
    <div className="App">
      <Navigation/>      
      {
        login
        ?
        <Home/>
        :
        <Login/>
      }  
      <Footer/>    
    </div>
  );
}

export default App;
