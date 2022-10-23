import React from "react";
import { Text } from "react-native";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../shared/navigation/types";
import { Box, HStack } from "native-base";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN>;

const SignIn: React.FC<Props> = ({ navigation }) => {
  return (
    <HStack space={3} justifyContent="center">
      <Text>Sign In</Text>
      <Text>Sign In</Text>
      <Text>Sign In</Text>
    </HStack>
  );
};

export default SignIn;
