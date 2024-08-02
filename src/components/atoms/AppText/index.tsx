import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import { AppTextProps } from "./types";

const AppText = ({ text, overrideTextStyle }: AppTextProps) => {
  const { colors } = useThemeContext();
  const themedStyles = styles(colors);

  return <Text style={[themedStyles.text, overrideTextStyle]}>{text}</Text>;
};

export default AppText;
