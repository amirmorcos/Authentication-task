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
import { signupForm, signupSchema } from "./types";

const SignupScreen = () => {
  const { colors } = useThemeContext();
  const { onCreateUser } = useAuthContext();
  const navigation = useAppNavigation();
  const methods = useForm<signupForm>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      confirmPassword: "",
      email: "",
      fullName: "",
      password: "",
    },
  });
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

  const themedStyles = styles(colors);

  const onSignup = async (data: signupForm) => {
    try {
      setButtonLoading(true);
      await onCreateUser(data.fullName, data.email, data.password);
    } catch (e) {
    } finally {
      setButtonLoading(false);
    }
  };

  const onLogin = () => {
    navigation.navigate("Login");
  };

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
      <FormProvider {...methods}>
        <InputController
          name="fullName"
          leftIcon={<Image source={Images.email} style={themedStyles.image} />}
          placeholder="Full Name"
          overrideContainerStyle={themedStyles.emailInput}
        />
        <InputController
          name="email"
          keyboardType="email-address"
          leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
          placeholder="Email"
          overrideContainerStyle={themedStyles.passwordInput}
        />

        <InputController
          name="password"
          leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
          secureTextEntry={isPasswordSecure}
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

        <InputController
          name="confirmPassword"
          secureTextEntry={isConfirmPasswordSecure}
          leftIcon={<Image source={Images.lock} style={themedStyles.image} />}
          rightIcon={
            <TouchableOpacity
              onPress={() =>
                setIsConfirmPasswordSecure(!isConfirmPasswordSecure)
              }
            >
              <Image source={Images.eye} style={themedStyles.image} />
            </TouchableOpacity>
          }
          placeholder="Confirm Password"
          overrideContainerStyle={themedStyles.passwordInput}
        />
      </FormProvider>

      <Button
        title="Sign up"
        isLoading={buttonLoading}
        onPress={methods.handleSubmit(onSignup)}
        overrideContainerStyle={themedStyles.signupButton}
      />
      <View style={themedStyles.bottomContainer}>
        <Text>
          <AppText
            overrideTextStyle={themedStyles.noAccount}
            text="Already a member? "
          />
          <AppText
            onPress={onLogin}
            text="Log in"
            overrideTextStyle={themedStyles.signup}
          />
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
