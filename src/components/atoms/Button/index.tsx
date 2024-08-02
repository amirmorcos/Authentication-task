import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button = ({ onPress, title, overrideContainerStyle }: ButtonProps) => {
  const { colors } = useThemeContext();
  const themedStyles = styles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, overrideContainerStyle]}
    >
      <AppText text={title} overrideTextStyle={themedStyles.title} />
    </TouchableOpacity>
  );
};

export default Button;
