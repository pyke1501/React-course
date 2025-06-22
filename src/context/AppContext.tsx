import React from "react";

const AppContext = React.createContext({});

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState('light');

  function toggleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);
// using: const { theme } = useAppContext();
