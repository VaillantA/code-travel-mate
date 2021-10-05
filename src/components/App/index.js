// == Import
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.scss';

import NavBar from 'src/components/NavBar';
import EventDetail from 'src/components/EventDetail';
import Results from 'src/components/Results';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import Login from 'src/components/Login';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Loading from 'src/components/Loading';
import Cards from 'src/components/Cards';
import Searchbar from 'src/components/Searchbar';
import Settings from 'src/components/Login';

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

  const redirection = useSelector((state) => state.events.redirection);
  const loading = useSelector((state) => state.events.loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <NavBar />
      <Settings />
      <Switch>
        <Route path="/" exact>
          {redirection ? <Redirect to="/results" /> : <Home /> }
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/detailsEvent/:id" exact>
          <EventDetail />
        </Route>
        <Route path="/results">
          {/* {loading ? <Loading /> : <Results />} */}
          <Results />
        </Route>
        <Route path="/Login">
          <Login />
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
