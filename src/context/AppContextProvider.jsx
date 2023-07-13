import { createContext, useContext, useReducer } from "react";
import { initialState, appReducer } from "../reducer/AppReducer";
const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;