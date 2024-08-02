/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";

import React from "react";
import AppNavigation from "navigation/appNavigation";
import ThemeProvider from "contexts/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
};

export default App;
