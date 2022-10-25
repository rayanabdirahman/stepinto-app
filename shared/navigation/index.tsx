import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import RootNavigator from "./RootNavigator";

type Props = {
  isUserSignedIn: boolean;
};

export default function Navigation({ isUserSignedIn }: Props) {
  return (
    <NavigationContainer>
      {isUserSignedIn ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
