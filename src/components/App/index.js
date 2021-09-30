// == Import
// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './style.scss';

import NavBar from 'src/components/NavBar';
import EventDetail from 'src/components/EventDetail';
import Results from 'src/components/Results';
import Categories from 'src/components/Categories';
import Events from 'src/components/Events';
import LoginForm from 'src/components/LoginForm';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';
import Home from '../Home';

// == romposant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_CATEGORIES',
    });
  }, []);

  const redirection = useSelector((state) => state.events.redirection);

  return (
    <div className="app">
      <NavBar />
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
        <Route path="/detailsEvent">
          <EventDetail />
        </Route>
        <Route path="/results">
          <Results />
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
