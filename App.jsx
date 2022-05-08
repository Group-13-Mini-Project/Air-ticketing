import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./hooks";
import { Navigation } from "./navigation";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const resourcesLoaded = useCachedResources();

  if (!resourcesLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
