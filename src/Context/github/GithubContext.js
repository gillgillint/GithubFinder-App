import { createContext, useReducer } from 'react';
import githubReducer from './githubReducer';
const GithubContext = createContext();

const initState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initState);

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
