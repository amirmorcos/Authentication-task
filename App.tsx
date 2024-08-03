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
import AuthProvider from "contexts/authContext";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <AppNavigation />
        </AuthProvider>
      </ThemeProvider>
      <Toast />
    </>
  );
};

export default App;
