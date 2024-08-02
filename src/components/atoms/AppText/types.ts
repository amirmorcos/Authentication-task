import { StyleProp, TextProps, TextStyle } from "react-native";

export type AppTextProps = TextProps & {
  text: string;
  overrideTextStyle?: StyleProp<TextStyle>;
};
