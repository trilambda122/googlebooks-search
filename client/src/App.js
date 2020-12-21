
import BookState from './context/BookState'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import Saved from "./components/Saved"
function App() {

  return (
    <Router>
      <BookState>
        <Switch>   
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route path='/saved'>
            <Saved/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </BookState>
    </Router>

    )
}

export default App;
