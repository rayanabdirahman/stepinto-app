import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthStackScreenNames } from "./types";
import SignUp from "../../screens/SignUp";
import SignIn from "../../screens/SignIn";

// const SignUp = React.lazy(() => import("../../screens/SignUp"));
// const SignIn = React.lazy(() => import("../../screens/SignIn"));

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={AuthStackScreenNames.SIGN_IN}>
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_UP}
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AuthStackScreenNames.SIGN_IN}
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
