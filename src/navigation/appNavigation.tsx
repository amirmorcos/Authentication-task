import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/login";
import WelcomeScreen from "screens/welcome";
import { useNavigationOptions } from "hooks/useNavigationOptions";

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { commonOptions, welcomeOptions } = useNavigationOptions();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={commonOptions}>
        <Stack.Screen
          name="Welcome"
          options={welcomeOptions}
          component={WelcomeScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
