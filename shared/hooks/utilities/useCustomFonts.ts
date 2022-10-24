import React from "react";
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

type ReturnType = {
  fontsLoaded: boolean;
  onLayoutRootView: () => Promise<void>;
};

export default function useCustomFonts(): ReturnType {
  const [fontsLoaded] = useFonts({
    Inter_Regular: Inter_400Regular,
    Inter_SemiBold: Inter_600SemiBold,
    Inter_Bold: Inter_700Bold,
    Inter_ExtraBold: Inter_800ExtraBold,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}
