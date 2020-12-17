// import React, {useState,UseEffect,useContext} from 'react';
import {StoreProvider} from  './utils/GlobalState'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import Saved from "./components/Saved"
function App() {
  return (
<Router>
  <StoreProvider>
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
  </StoreProvider>
</Router>
  );
}

export default App;
