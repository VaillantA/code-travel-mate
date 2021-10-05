import { User } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import Login from './Login';
// import Settings from 'src/components/Login';

const Settings = () => {
  const isOpen = useSelector((state) => state.login.loginOpen);
  const logged = useSelector((state) => state.login.logged);
  const pseudo = useSelector((state) => state.login.pseudo);

  const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //   });
  // };
  return (
    <div className={isOpen ? 'settings' : 'settings settings--hidden'}>
      <div className={isOpen ? 'container-ok' : 'container-none'}>
        {!logged && <Login />}
      </div>
      {logged && (
        <p className="connected">
          Connecté en tant que {pseudo}
          {/* <button onClick={handleLogout} type="button">Log Out</button> */}
        </p>
      )}
    </div>
  );
};

export default Settings;
