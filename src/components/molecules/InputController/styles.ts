import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    error: {
      ...Typography.caption,
      color: colors.RED,
      marginTop: verticalScale(5),
      marginStart: scale(5),
    },
  });
