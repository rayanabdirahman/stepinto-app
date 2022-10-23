import React from "react";
import { Text } from "react-native";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../shared/navigation/types";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  return <Text>Sign In</Text>;
};

export default SignIn;
