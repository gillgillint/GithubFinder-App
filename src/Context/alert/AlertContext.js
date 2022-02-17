import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();
const initState = null;

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initState);

  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 3000);
  };

  const alertContextValue = {
    alert: state,
    setAlert,
  };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
