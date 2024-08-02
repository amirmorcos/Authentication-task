import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      padding: scale(20),
    },
    title: {
      color: colors.DARK_GREEN,
      ...Typography.subtitle,
      marginTop: verticalScale(10),
    },
    subtitle: {
      marginTop: verticalScale(15),
      color: colors.MED_GREEN,
    },

    bottomContainer: {
      marginBottom: verticalScale(30),
      flex: 1,
      justifyContent: "flex-end",
    },
    noAccount: {
      textAlign: "center",
      ...Typography.bodySmall,
      color: colors.DARK_GREEN,
    },
    signup: {
      textDecorationStyle: "solid",
      textDecorationLine: "underline",
      textDecorationColor: colors.YELLOW,
      ...Typography.bodySmall,
      color: colors.DARK_GREEN,
    },
    emailInput: {
      marginTop: verticalScale(35),
    },
    passwordInput: {
      marginTop: verticalScale(20),
    },
    signupButton: {
      marginTop: verticalScale(30),
    },
    image: {
      height: scale(20),
      width: scale(20),
    },
  });
