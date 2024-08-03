import Input from "atoms/Input";
import React from "react";
import { useController } from "react-hook-form";
import { InputControllerProps } from "./types";
import { Text } from "react-native";
import { useThemeContext } from "contexts/themeContext";
import styles from "./styles";
import AppText from "atoms/AppText";

const InputController = ({
  name,
  leftIcon,
  rightIcon,
  overrideContainerStyle,
  ...props
}: InputControllerProps) => {
  const { colors } = useThemeContext();
  const { field, formState } = useController({ name });

  const themedStyles = styles(colors);

  return (
    <>
      <Input
        {...props}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        overrideContainerStyle={overrideContainerStyle}
      />
      {formState.errors[name] && (
        <AppText
          text={formState.errors[name].message?.toString()!!}
          overrideTextStyle={themedStyles.error}
        />
      )}
    </>
  );
};

export default InputController;
