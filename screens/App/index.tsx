import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "../../shared/navigation";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const BootstrapApp: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <Navigation isUserSignedIn={false} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BootstrapApp;
