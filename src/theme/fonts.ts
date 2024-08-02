import { moderateScale } from "react-native-size-matters/extend";

const Fonts = {
  regular: "Sora-Regular",
  bold: "Sora-Bold",
  semiBold: "Sora-SemiBold",
  light: "Sora-Light",
  extraLight: "Sora-ExtraLight",
  thin: "Sora-Thin",
  medium: "Sora-Medium",
  extraBold: "Sora-ExtraBold",
};

export const Typography = {
  titleHero: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(72),
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(48),
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(32),
  },
  heading: {
    fontFamily: Fonts.semiBold,
    fontSize: moderateScale(24),
  },
  subHeading: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(20),
  },
  bodyBase: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
  },
  bodyStrong: {
    fontFamily: Fonts.semiBold,
    fontSize: moderateScale(16),
  },
  bodyEmphasis: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
  },
  bodyLink: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(16),
  },
  bodySmall: {
    fontFamily: Fonts.regular,
    fontSize: moderateScale(14),
  },
  bodySmallStrong: {
    fontFamily: Fonts.semiBold,
    fontSize: moderateScale(14),
  },
};
