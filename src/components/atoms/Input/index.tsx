import { useThemeContext } from "contexts/themeContext";
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";

const Input = ({
  leftIcon,
  rightIcon,
  overrideContainerStyle,
  ...props
}: InputProps) => {
  const { colors } = useThemeContext();

  const themedStyles = styles(colors);

  return (
    <View style={[themedStyles.container, overrideContainerStyle]}>
      <View style={themedStyles.innerContainer}>
        {leftIcon}
        <TextInput
          {...props}
          placeholderTextColor={colors.MED_GREEN}
          style={themedStyles.input}
        />
      </View>
      {rightIcon}
    </View>
  );
};

export default Input;
