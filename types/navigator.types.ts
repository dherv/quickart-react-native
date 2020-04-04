import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface RootStackParamList {
  [key: string]: undefined;
  Home: undefined;
  CreateList: undefined;
}

// type ProfileScreenRouteProp<T extends string | number> = RouteProp<RootStackParamList, T>;

// type ProfileScreenNavigationProp<T> = StackNavigationProp<
//   RootStackParamList,
//   T
// >;

export interface NavigatorProps<T extends string | number> {
  route: RouteProp<RootStackParamList, T>;
  navigation: StackNavigationProp<RootStackParamList, T>;
}
