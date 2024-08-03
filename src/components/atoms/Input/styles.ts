import { AppColors } from "assets/colors/types";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";
import { Typography } from "theme/fonts";

export default (colors: AppColors) =>
  StyleSheet.create({
    container: {
      borderColor: colors.MED_GREEN,
      width: "100%",
      height: verticalScale(50),
      borderWidth: 1,
      borderRadius: 6,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: scale(20),
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    input: {
      marginStart: scale(10),
      ...Typography.bodyBase,
      color: colors.DARK_GREEN,
      width: "100%",
    },
  });
