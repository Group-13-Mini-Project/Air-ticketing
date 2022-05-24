import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

const OAuthButton = ({ onPress, title, backgroundColor = "#4D4F73", icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <FontAwesome5 name={icon.name} color={icon.color} style={styles.icon} />

      <Text style={[styles.text]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "20%",
  },
  icon: {
    marginRight: "5%",
    fontSize: 16,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Syne_500Medium",
    color: "#152A3C",
  },
});

export default OAuthButton;
