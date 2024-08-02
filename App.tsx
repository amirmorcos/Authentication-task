/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";

import React from "react";
import AppNavigation from "./src/navigation/appNavigation";
import { ThemeProvider } from "./src/contexts/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
