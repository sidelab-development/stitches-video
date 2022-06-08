import { Switch } from "@chakra-ui/react";
import { useTheme } from "../hooks/useTheme";
import { dark } from "../styles/theme/dark";

export const Switcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      colorScheme='purple'
      size='lg'
      onChange={toggleTheme}
      isChecked={theme === dark}
    />
  );
};
