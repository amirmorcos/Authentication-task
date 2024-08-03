import { yupResolver } from "@hookform/resolvers/yup";
import { AppText, Button } from "atoms/index";
import { useAuthContext } from "contexts/authContext";
import { useThemeContext } from "contexts/themeContext";
import InputController from "molecules/InputController";
import { useAppNavigation } from "navigation/types";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images } from "theme/images";
import styles from "./styles";
import { loginForm, loginSchema } from "./types";

const LoginScreen = () => {
  const { colors } = useThemeContext();
  const navigation = useAppNavigation();
  const { onSignin } = useAuthContext();
  const methods = useForm<loginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const themedStyles = styles(colors);

  const onSignup = () => {
    navigation.navigate("Signup");
  };

  const onLogin = async (data: loginForm) => {
    try {
      setButtonLoading(true);
      await onSignin(data.email, data.password);
    } catch (e) {
    } finally {
      setButtonLoading(false);
    }
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
      <FormProvider {...methods}>
        <InputController
          name="email"
          leftIcon={<Image source={Images.email} style={themedStyles.image} />}
          placeholder="Email"
          overrideContainerStyle={themedStyles.emailInput}
        />
        <InputController
          name="password"
          secureTextEntry={isPasswordSecure}
          leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
          rightIcon={
            <TouchableOpacity
              onPress={() => setIsPasswordSecure(!isPasswordSecure)}
            >
              <Image source={Images.eye} style={themedStyles.image} />
            </TouchableOpacity>
          }
          placeholder="Password"
          overrideContainerStyle={themedStyles.passwordInput}
        />
      </FormProvider>

      <AppText
        text="Forgot password?"
        overrideTextStyle={themedStyles.forgotPassword}
      />
      <Button
        title="Log in"
        onPress={methods.handleSubmit(onLogin)}
        isLoading={buttonLoading}
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
