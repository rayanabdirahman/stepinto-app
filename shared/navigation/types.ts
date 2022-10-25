import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

// ========== Auth stack types ========== //
export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

export enum AuthStackScreenNames {
  SIGN_UP = "SignUp",
  SIGN_IN = "SignIn",
}

export type AuthScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

// ========== Root stack types ========== //
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

// ========== Root Tab types ========== //
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Feed: undefined;
  Settings: undefined;
};

export enum RootTabScreenNames {
  HOME = "Home",
  SEARCH = "Search",
  FEED = "Feed",
  SETTINGS = "Settings",
}

export type RootScreenProps<Screen extends keyof RootTabParamList> =
  NativeStackScreenProps<RootTabParamList, Screen>;
