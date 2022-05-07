import { Link } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, OAuthButton } from "../components";

// TODO
// 1. React navigation back button
// 2. Show/Hide password

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccountFormSubmit = () => {
    console.log("signing up as", {
      name,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitleText}>Create An Account</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="rgba(0,0,0,0.5)"
            style={styles.textInputContainer}
            value={name}
          />

          <TextInput
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.5)"
            style={styles.textInputContainer}
            value={email}
          />

          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,0.5)"
            secureTextEntry
            style={styles.textInputContainer}
            value={password}
          />

          <TextInput
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(0,0,0,0.5)"
            secureTextEntry
            style={styles.textInputContainer}
            value={confirmPassword}
          />

          <View style={styles.createAccountButtonContainer}>
            <Button
              onPress={handleCreateAccountFormSubmit}
              title="Create Account"
            />
          </View>

          <View style={styles.signInRedirectContainer}>
            <Text style={styles.signInRedirectText}>
              Already have an account?
            </Text>

            <Link to={{ screen: "Home" }} style={styles.signInRedirectLink}>
              Sign in
            </Link>
          </View>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(253, 122, 113, 0.25)"
              icon={{ name: "google", color: "#F14336" }}
              onPress={() => console.log("google sign-up")}
              title="Continue with Google"
            />
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(92, 137, 226, 0.37)"
              icon={{ name: "facebook", color: "#4267B2" }}
              onPress={() => console.log("facebook sign-up")}
              title="Continue with Facebook"
            />
          </View>

          <View style={styles.socialSignUpButtonContainer}>
            <OAuthButton
              backgroundColor="rgba(111, 155, 192, 0.1)"
              icon={{ name: "apple", color: "#152A3C" }}
              onPress={() => console.log("apple sign-up")}
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
    alignItems: "center",
    marginBottom: 36,
    marginTop: 24,
  },
  screenTitleText: {
    color: "#505168",
    fontFamily: "Syne_700Bold",
    fontSize: 32,
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
  signInRedirectContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  signInRedirectText: {
    color: "#000000",
    fontFamily: "Syne_400Regular",
    fontSize: 14,
  },
  signInRedirectLink: {
    color: "#3C64B2",
    fontFamily: "Syne_700Bold",
    fontSize: 14,
    padding: 4,
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

export default SignUpScreen;
