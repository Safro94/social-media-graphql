import React, { createContext, useContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const initState = {
  user: null,
};

if (localStorage.getItem('token')) {
  const decodedToken = jwtDecode(localStorage.getItem('token'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
  } else {
    initState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const useAuth = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    setAuth({ type: LOGIN, value: data });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({ type: LOGOUT });
  };

  return { ...auth, login, logout };
};

const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, user: action.value };
      case LOGOUT:
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };

  return (
    <AuthContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
