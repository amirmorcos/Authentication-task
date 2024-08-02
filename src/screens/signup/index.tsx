import { AppText, Button, Input } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { Image, Text, View } from "react-native";
import { Images } from "theme/images";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupScreen = () => {
  const { colors } = useThemeContext();

  const themedStyles = styles(colors);

  return (
    <KeyboardAwareScrollView
      style={themedStyles.container}
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <AppText text="Create Account" overrideTextStyle={themedStyles.title} />
      <AppText
        text="Sign up to get started!"
        overrideTextStyle={themedStyles.subtitle}
      />
      <Input
        leftIcon={<Image source={Images.email} style={themedStyles.image} />}
        placeholder="Full Name"
        overrideContainerStyle={themedStyles.emailInput}
      />
      <Input
        leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
        placeholder="Email"
        overrideContainerStyle={themedStyles.passwordInput}
      />

      <Input
        leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
        rightIcon={<Image source={Images.eye} style={themedStyles.image} />}
        placeholder="Password"
        overrideContainerStyle={themedStyles.passwordInput}
      />

      <Input
        leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
        rightIcon={<Image source={Images.eye} style={themedStyles.image} />}
        placeholder="Confirm Password"
        overrideContainerStyle={themedStyles.passwordInput}
      />

      <Button
        title="Sign up"
        onPress={() => {}}
        overrideContainerStyle={themedStyles.signupButton}
      />
      <View style={themedStyles.bottomContainer}>
        <Text>
          <AppText
            overrideTextStyle={themedStyles.noAccount}
            text="Already a member? "
          />
          <AppText text="Log in" overrideTextStyle={themedStyles.signup} />
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
