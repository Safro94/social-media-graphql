import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const useAuth = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const login = (data) => setAuth({ type: LOGIN, value: data });

  const logout = () => setAuth({ type: LOGOUT });

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
    <AuthContext.Provider value={useReducer(reducer, { user: null })}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
