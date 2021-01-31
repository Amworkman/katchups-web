import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'


function App() {
  return (
    <div className="App">      
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        {/* <Route path="/" component={Main} /> */}
      </Router>
    </div>
  );
}

export default App;
