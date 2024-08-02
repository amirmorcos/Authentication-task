import { StyleProp, TextStyle } from "react-native";

export type AppTextProps = {
  text: string;
  overrideTextStyle?: StyleProp<TextStyle>;
};
