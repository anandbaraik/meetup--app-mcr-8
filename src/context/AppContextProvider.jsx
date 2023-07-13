import { createContext, useContext, useReducer } from "react";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {};

const reducer = (state, action) => {};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
