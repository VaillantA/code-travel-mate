// == Import
import React from 'react';

// import { BrowserRouter } from 'react-router-dom';
import NavBar from 'src/components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import NotFound from 'src/components/NotFound';
import Profil from 'src/components/Profil';
import './style.scss';
import Cards from 'src/components/Cards';
import Searchbar from 'src/components/Searchbar';
import Footer from 'src/components/Footer';
import EventDetail from 'src/components/EventDetail';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from '../Home';
import ProfilCards from '../Profil/ProfilCards';
 'src/components/';


// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS',
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CATEGORIES',
    });
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
      </Route>
        <Route path="/" exact>
          <Searchbar />
          <Cards />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/detailsEvent">
          <EventDetail />
        </Route>
        <Route path="/registration">
          <LoginForm />
        </Route>
        {/* <Redirect from="/jquery" to="/autre" /> */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
