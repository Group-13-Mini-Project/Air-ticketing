import {
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  useFonts,
} from "@expo-google-fonts/syne";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Navigation } from "./navigation";

const App = () => {
  let [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
  });

  // useEffect(() => {
  //   if (Platform.OS == "android") {
  //     (async () => {
  //       await NavigationBar.setButtonStyleAsync("dark");
  //       await NavigationBar.setBackgroundColorAsync("#F8F9FA");
  //     })();
  //   }
  // }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Navigation />
      <StatusBar />
    </>
  );
};

export default App;
