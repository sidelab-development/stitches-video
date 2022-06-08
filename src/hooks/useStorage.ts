import { useEffect, useState } from "react";
import { dark } from "../styles/theme/dark";
import { light } from "../styles/theme/light";

interface StorageProps {
  theme: string,
  toggleTheme: () => void
}

export const useStorage = (): StorageProps => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeInStorage = localStorage.getItem('stitches@theme');

    if (themeInStorage === null) {
      setTheme(light);
      localStorage.setItem('stitches@theme', 'light')
    } else {
      setTheme(themeInStorage === 'light' ? light : dark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === light ? 'dark' : 'light';
    localStorage.setItem('stitches@theme', newTheme);
    setTheme(newTheme === 'light' ? light : dark);
  }

  return { theme, toggleTheme };
}