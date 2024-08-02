import React, { createContext, useContext, useState } from "react";
import { AppColors } from "../../assets/colors/types";
import Colors from "../../assets/colors";

type ThemeProps = {
  colors: AppColors;
  onChangeTheme: (colors: AppColors) => void;
};
const ThemeContext = createContext<ThemeProps | null>(null);

export const useThemeContext = () => useContext(ThemeContext) as ThemeProps;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState(Colors);

  return (
    <ThemeContext.Provider value={{ colors, onChangeTheme: setColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
