import { createContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

// component which we are going to return from this file
const AppContext = ({ children }) => {
  const [name, setName] = useState("peter");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

// in value..in es6... name:name ===> name
