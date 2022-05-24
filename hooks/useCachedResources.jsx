import {
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  useFonts,
} from "@expo-google-fonts/syne";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const useCachedResources = () => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
  });

  useEffect(() => {
    async function loadResourcesAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ ...FontAwesome5.font });
      } catch (e) {
        console.warn(e);
      } finally {
        setResourcesLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAsync();
  }, []);

  return resourcesLoaded;
};

export default useCachedResources;
