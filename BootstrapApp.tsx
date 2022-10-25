import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./shared/navigation";
import { NativeBaseProvider } from "native-base";
import useCustomFonts from "./shared/hooks/utilities/useCustomFonts";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const InitApp = ({ onLayoutRootView }) => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={["top"]}
      onLayout={onLayoutRootView}
    >
      <Navigation isUserSignedIn={true} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const BootstrapApp: React.FC = () => {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <InitApp onLayoutRootView={onLayoutRootView} />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default BootstrapApp;
