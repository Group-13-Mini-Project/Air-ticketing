import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [toggleText, setToggleText] = useState("Show");

  const handleToggleButtonClick = () => {
    if (secureTextEntry) {
      setToggleText("Hide");
      setSecureTextEntry(false);
    } else {
      setToggleText("Show");
      setSecureTextEntry(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(0,0,0,0.5)"
        secureTextEntry={secureTextEntry}
        value={value}
        style={styles.textInput}
      />

      <Pressable
        onPress={handleToggleButtonClick}
        style={{ paddingVertical: 8 }}
      >
        <Text style={styles.toggleText}>{toggleText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    height: 48,
    justifyContent: "space-between",
    marginBottom: 18,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    fontFamily: "Syne_400Regular",
  },
  toggleText: {
    color: "#3C64B2",
    fontFamily: "Syne_400Regular",
  },
});

export default PasswordInput;
