import { Plus } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { Link } from 'react-router-dom';
import Login from './Login';

const Settings = () => {
  const isOpen = useSelector((state) => state.login.loginOpen);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };
  // const handleLogout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //   });
  // };
  return (
    <div className={isOpen ? 'settings' : 'settings settings--hidden'}>
      <button onClick={handleClick} className="settings-toggler" type="button" aria-label="Open/Close">
        <Plus size="100%" />
        {/* Log In */}
      </button>
      <div className={isOpen ? 'container-ok' : 'container-none'}>
        <Login />
      </div>
    </div>
  );
};

export default Settings;
