import React from "react";
import { Text } from "react-native";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../shared/navigation/types";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_UP>;

const SignUp: React.FC<Props> = ({ navigation }) => {
  return <Text>Sign up</Text>;
};

export default SignUp;
