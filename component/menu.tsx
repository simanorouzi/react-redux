import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { athenticationActions, useAppSelector } from '../src/reduxCounter';

const menu = () => {
  const disPatch = useDispatch();
  const isAthenticated = useAppSelector(
    (state) => state.athentication.isAthenticated
  );

  const loginHandler = () => {
    console.log(isAthenticated);
    disPatch(athenticationActions.logIn());
  };

  const logOutHandler = () => {
    disPatch(athenticationActions.logOut());
  };

  return (
    <div>
      {!isAthenticated && (
        <div>
          <div>
            <a href="#" onClick={loginHandler}>
              Login
            </a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <a href="#">About Us</a>
          </div>
        </div>
      )}

      {isAthenticated && (
        <div>
          <div>
            <a href="#" onClick={logOutHandler}>
              LogOut
            </a>
          </div>
          <div>
            <a href="#">Dashboard</a>
          </div>
          <div>
            <a href="#">Profile Sttings</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default menu;
