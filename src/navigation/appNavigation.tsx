import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationOptions } from "hooks/useNavigationOptions";
import React from "react";
import SignupScreen from "screens/signup";
import WelcomeScreen from "screens/welcome";
import LoginScreen from "../screens/login";
import { RootParamsList } from "./types";

const Stack = createStackNavigator<RootParamsList>();

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
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
