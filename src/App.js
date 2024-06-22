import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
