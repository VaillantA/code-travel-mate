// == Import
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import NavBar from 'src/components/NavBar';
import {Switch, Route, Redirect } from 'react-router-dom';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import NotFound from 'src/components/NotFound';
import Searchbar from 'src/components/Searchbar';
import Cards from 'src/components/Cards';

import './style.scss';

// == Composant
const App = () => {
    return(
   
  
      <div className="app">
          <NavBar />
          {/* <Searchbar /> */}
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/registration">
              <LoginForm />
            </Route>
            {/* <Redirect from="/jquery" to="/autre" /> */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
      </div>
   
  )
};

// == Export
export default App;


