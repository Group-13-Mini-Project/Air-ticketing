import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks";
import AuthStack from "./AuthStack";
import RootStack from "./RootStack";

const Navigation = () => {
  const { authData } = useAuth();
  console.log("authData", authData);

  return (
    <NavigationContainer>
      {authData?.token ? <RootStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
