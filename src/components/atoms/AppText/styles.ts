import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    text: {
      ...Typography.bodyBase,
      color: colors.BLACK,
    },
  });
