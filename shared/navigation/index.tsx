import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

type Props = {
  isUserSignedIn: boolean;
};

export default function Navigation({ isUserSignedIn }: Props) {
  return (
    <NavigationContainer>
      {/* {isUserSignedIn ? <RootNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
