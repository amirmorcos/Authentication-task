import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  onPress,
  title,
  overrideContainerStyle,
  disabled,
  isLoading,
}: ButtonProps) => {
  const { colors } = useThemeContext();
  const themedStyles = styles(colors);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        themedStyles.container,
        disabled && themedStyles.disabled,
        overrideContainerStyle,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <AppText
          text={title}
          overrideTextStyle={[
            themedStyles.title,
            disabled && themedStyles.disabledText,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
