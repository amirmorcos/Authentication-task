import { AppText, Button, Input } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { Image, Text, View } from "react-native";
import { Images } from "theme/images";
import styles from "./styles";
import { useAppNavigation } from "navigation/types";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const { colors } = useThemeContext();
  const navigation = useAppNavigation();

  const themedStyles = styles(colors);

  const onSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      style={themedStyles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
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
          <AppText
            onPress={onSignup}
            text="Signup"
            overrideTextStyle={themedStyles.signup}
          />
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
