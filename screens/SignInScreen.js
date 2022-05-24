import { Link } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, OAuthButton, PasswordInput } from "../components";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInFormSubmit = () => {
    console.log("signing in as", {
      email,
      password,
    });
  };

  return (
    <SafeAreaView edges={["bottom", "right", "left"]} style={styles.container}>
      <ScrollView>
        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitleText}>Sign In</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.5)"
            style={styles.textInputContainer}
            value={email}
          />

          <PasswordInput
            onChangeText={setPassword}
            placeholder="Password"
            value={password}
          />

          <View style={styles.createAccountButtonContainer}>
            <Button onPress={handleSignInFormSubmit} title="Sign In" />
          </View>

          <View style={styles.forgotPasswordContainer}>
            <Link to={{ screen: "Home" }} style={styles.forgotPasswordLink}>
              Forgot password?
            </Link>
          </View>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(253, 122, 113, 0.25)"
              icon={{ name: "google", color: "#F14336" }}
              onPress={() => console.log("google sign-in")}
              title="Continue with Google"
            />
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(92, 137, 226, 0.37)"
              icon={{ name: "facebook-f", color: "#4267B2" }}
              onPress={() => console.log("facebook sign-in")}
              title="Continue with Facebook"
            />
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(111, 155, 192, 0.1)"
              icon={{ name: "apple", color: "#152A3C" }}
              onPress={() => console.log("apple sign-in")}
              title="Continue with Apple"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  screenTitleContainer: {
    marginBottom: 36,
    marginHorizontal: 24,
  },
  screenTitleText: {
    color: "#505168",
    fontFamily: "Syne_700Bold",
    fontSize: 28,
  },
  formContainer: {
    marginHorizontal: 24,
  },
  textInputContainer: {
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    marginBottom: 18,
    paddingHorizontal: 16,
    fontFamily: "Syne_400Regular",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  forgotPasswordLink: {
    color: "#3C64B2",
    fontFamily: "Syne_500Medium",
    fontSize: 14,
    padding: 8,
  },
  orContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  orText: {
    fontFamily: "Syne_600SemiBold",
    fontSize: 14,
    color: "#000000",
  },
  createAccountButtonContainer: {
    marginBottom: 8,
  },
  socialSignUpButtonContainer: {
    marginBottom: 12,
  },
});

export default SignInScreen;
