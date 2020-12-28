import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Firegram'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import PrivateRoute from './Components/PrivateRoute'
import {AuthProvider} from './context/AuthContext'


function App() {
  
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <div className="App">
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </div>
        </AuthProvider>
      </Switch>
    </Router>
    
  );
}

export default App;
