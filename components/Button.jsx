import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({
  onPress,
  title,
  backgroundColor = "#4D4F73",
  color = "white",
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Syne_600SemiBold",
  },
});

export default Button;
