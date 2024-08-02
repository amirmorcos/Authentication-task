import { AppText, Button } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { Image, SafeAreaView, View } from "react-native";
import { Images } from "theme/images";
import styles from "./styles";
import { useAppNavigation } from "navigation/types";

const WelcomeScreen = () => {
  const { colors } = useThemeContext();
  const navigate = useAppNavigation();

  const themedStyles = styles(colors);

  return (
    <SafeAreaView style={themedStyles.container}>
      <View style={themedStyles.content}>
        <View style={themedStyles.titleContainer}>
          <AppText overrideTextStyle={themedStyles.title} text="Spedah" />
          <View style={themedStyles.imageContainer}>
            <Image
              source={Images.bike}
              resizeMode="contain"
              style={themedStyles.image}
            />
          </View>
        </View>
        <AppText
          text="Let's get started"
          overrideTextStyle={themedStyles.getStarted}
        />

        <AppText
          text="Everything start from here"
          overrideTextStyle={themedStyles.startHere}
        />

        <View style={themedStyles.buttonsContainer}>
          <Button onPress={() => navigate.navigate("Login")} title="Log in" />
          <Button
            onPress={() => {}}
            title="Sign up"
            overrideContainerStyle={themedStyles.signUp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
