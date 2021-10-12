// == Import
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.scss';
import NavBar from 'src/components/NavBar';
import EventDetail from 'src/components/EventDetail';
import Results from 'src/components/Results';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import Login from 'src/components/Login/Login';
import Settings from 'src/components/Login';
import NotFound from 'src/components/NotFound';
import Profil from 'src/components/Profil';
import Category from 'src/components/Category';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Loading from 'src/components/Loading';
import Cards from 'src/components/Cards';
import Contact from 'src/components/Contact';
import MentionsLegales from 'src/components/MentionsLegales';
// import Login from 'src/components/Login/Login';
import EventForm from 'src/components/EventForm';

import AboutUs from 'src/components/AboutUs';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_EVENTS',
  //   });
  // }, []);
  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_CATEGORIES',
  //   });
  // }, []);
  const data = JSON.parse(sessionStorage.getItem('key'));
  console.log(data);
  if (data) {
    dispatch({
      type: 'SAVE_USER_LOGIN',
      logged: true,
      pseudo: data.data.nickname,
      token: data.token,
      userId: data.data.id,
    });
  }

  const redirection = useSelector((state) => state.events.redirection);
  const loading = useSelector((state) => state.events.loading);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="app">
      <NavBar />
      <Settings />
      {/* <EventForm /> */}
      <Switch>
        <Route path="/" exact>
          {redirection ? <Redirect to="/results" /> : <Home /> }
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/category/:id" exact>
          <Category />
        </Route>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/detailsEvent/:id" exact>
          {redirection ? <Redirect to="/results" /> : <EventDetail /> }
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/registration">
          <LoginForm />
        </Route>
        {/* <Redirect from="/jquery" to="/autre" /> */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/mentions-legales">
          <MentionsLegales />
        </Route>
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
