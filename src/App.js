import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import SelectImage from './Components/SignUp/SelectImage'
import Main from './Components/Main/Main'


function App() {
  return (
    <div className="App">      
      <Router>
        <Route path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/sign-up/select-image" component={SelectImage} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
