import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters/extend";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      height: verticalScale(50),
      backgroundColor: colors.YELLOW,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    title: {
      color: colors.BUTTON_TEXT,
      ...Typography.bodyStrong,
    },
    disabled: {
      backgroundColor: colors.GREY,
    },
    disabledText: {
      color: colors.WHITE,
    },
  });
