import { AppText, Button, Input } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { Image, Text, View } from "react-native";
import { Images } from "theme/images";
import styles from "./styles";

const LoginScreen = () => {
  const { colors } = useThemeContext();

  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <AppText text="Welcome back" overrideTextStyle={themedStyles.title} />
      <AppText
        text="Enter your credential to continue"
        overrideTextStyle={themedStyles.subtitle}
      />
      <Input
        leftIcon={<Image source={Images.email} style={themedStyles.image} />}
        placeholder="Email or username"
        overrideContainerStyle={themedStyles.emailInput}
      />
      <Input
        leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
        rightIcon={<Image source={Images.eye} style={themedStyles.image} />}
        placeholder="Password"
        overrideContainerStyle={themedStyles.passwordInput}
      />

      <AppText
        text="Forgot password?"
        overrideTextStyle={themedStyles.forgotPassword}
      />
      <Button
        title="Log in"
        onPress={() => {}}
        overrideContainerStyle={themedStyles.loginButton}
      />
      <View style={themedStyles.bottomContainer}>
        <Text>
          <AppText
            overrideTextStyle={themedStyles.noAccount}
            text="Don't have an account? "
          />
          <AppText text="Signup" overrideTextStyle={themedStyles.signup} />
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
