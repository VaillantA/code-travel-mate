import { User} from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
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
        <User size="100%" color="#3B185F" />
        {/* Log In */}
      </button>
      <div className={isOpen ? 'container-ok' : 'container-none'}>
        <Login />
      </div>
    </div>
  );
};

export default Settings;
