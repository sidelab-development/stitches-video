import { createContext, ReactNode, useContext } from "react";
import { useStorage } from "./useStorage";

interface ContextData {
  theme: string,
  toggleTheme: () => void
}

interface ContextProps {
  children: ReactNode
}

const ThemeContext = createContext({} as ContextData);

export const ThemeProvider = ({ children }: ContextProps) => {
  const {theme, toggleTheme} = useStorage()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context
}