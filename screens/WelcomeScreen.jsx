import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SvgWelcomeImage, SvgWelcomeText } from "../components";

const WelcomeScreen = ({ navigation }) => {
  const handleGetStartedButtonPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeText}>
        <SvgWelcomeText />
      </View>

      <SvgWelcomeImage />

      <View style={styles.getStartedButton}>
        <Button onPress={handleGetStartedButtonPress} title="Get Started" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "space-between",
  },
  welcomeText: {
    marginTop: 48,
    alignItems: "center",
  },
  getStartedButton: {
    marginHorizontal: 24,
    marginBottom: 48,
  },
});

export default WelcomeScreen;
