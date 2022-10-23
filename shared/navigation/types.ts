import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
