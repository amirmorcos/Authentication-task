import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.DARK_GREEN,
    },
    content: {
      flex: 1,
      padding: scale(20),
    },
    signUp: {
      marginTop: verticalScale(15),
      backgroundColor: colors.LIGHT_GREEN,
    },
    imageContainer: {
      height: scale(320),
      width: scale(320),
      backgroundColor: colors.LIGHT_GREEN,
      borderRadius: scale(200),
      alignItems: "center",
      paddingEnd: scale(100),
      paddingBottom: verticalScale(30),
      justifyContent: "center",
      marginTop: verticalScale(30),
    },
    image: {
      width: scale(455),
      height: scale(364),
    },
    title: {
      ...Typography.heading,
      color: colors.WHITE,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    getStarted: {
      color: colors.WHITE,
      ...Typography.title,
    },
    startHere: {
      color: colors.WHITE,
      marginTop: verticalScale(10),
    },
    buttonsContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
  });
