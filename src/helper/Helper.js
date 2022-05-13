import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

const Helper = ({ children }) => {
  const [dataContext, setDataContext] = useState({
    user: {},
  });

  useEffect(() => {
    setDataContext({
      ...dataContext,
      user: localStorage.getItem("user-info")
        ? JSON.parse(localStorage.getItem("user-info"))
        : {},
    });
  }, []);
  return (
    <DataContext.Provider value={[dataContext, setDataContext]}>
      {children}
    </DataContext.Provider>
  );
};

export default Helper;
