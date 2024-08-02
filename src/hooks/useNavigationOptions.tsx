import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { Image, View } from "react-native";
import { scale } from "react-native-size-matters/extend";
import { Images } from "theme/images";

export const useNavigationOptions = () => {
  const commonOptions: StackNavigationOptions = {
    headerBackTitleVisible: false,
    headerTitle: "",
    headerShadowVisible: false,
    headerBackImage: () => (
      <View style={{ marginStart: scale(20) }}>
        <Image
          source={Images.arrow}
          style={{ height: scale(24), width: scale(24) }}
        />
      </View>
    ),
  };

  const welcomeOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return {
    commonOptions,
    welcomeOptions,
  };
};
