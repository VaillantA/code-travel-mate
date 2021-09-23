// == Import
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import NavBar from 'src/components/NavBar';
import {Switch, Route, Redirect } from 'react-router-dom';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import NotFound from 'src/components/NotFound';
import './style.scss';
import Cards from 'src/components/Cards';
import Searchbar from 'src/components/Searchbar';
import Home from '../Home';

// == Composant
const App = () => {
    return(
      <div className="app">
          <NavBar />
          <Switch>
            <Route path="/home">
            <Home />
            </Route>
            <Route path="/"exact>
            <Searchbar />
            <Cards />
            </Route>
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


