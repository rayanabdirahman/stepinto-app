import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "../../shared/navigation";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";

const BootstrapApp: React.FC = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Navigation isUserSignedIn={false} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default BootstrapApp;
