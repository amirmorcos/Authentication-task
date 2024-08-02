import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootParamsList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

export const useAppNavigation = useNavigation<
  StackNavigationProp<RootParamsList>
>;
