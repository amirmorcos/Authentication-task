import React from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
