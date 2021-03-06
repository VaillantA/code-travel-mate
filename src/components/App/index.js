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
import Contact from 'src/components/Contact';
import MentionsLegales from 'src/components/MentionsLegales';
import EventForm from 'src/components/EventForm';
import AboutUs from 'src/components/AboutUs';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(sessionStorage.getItem('key'));

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
  const isLogged = useSelector((state) => state.login.logged);


  return (
    <div className="app">
      <NavBar />
      <Settings />
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
          {isLogged ? <Profil /> : <Redirect to="/" />}
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/eventform">
          <EventForm />
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
