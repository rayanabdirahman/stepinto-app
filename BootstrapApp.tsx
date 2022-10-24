import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./shared/navigation";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import useCustomFonts from "./shared/hooks/utilities/useCustomFonts";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const BootstrapApp: React.FC = () => {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Navigation isUserSignedIn={false} />
          <StatusBar style="auto" />
        </SafeAreaView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default BootstrapApp;
