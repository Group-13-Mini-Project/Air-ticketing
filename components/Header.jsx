import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = ({ navigation, back, hasRight = false }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      {back ? (
        <Pressable onPress={navigation.goBack} style={styles.iconButton}>
          <FontAwesome5 name="chevron-left" size={20} color="#505168" />
        </Pressable>
      ) : (
        <View />
      )}

      {hasRight ? (
        <Pressable
          onPress={() =>
            console.log("Replace Pressable to Link to user profile")
          }
          style={styles.iconButton}
        >
          <FontAwesome5 name="user-circle" size={20} color="#505168" />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  iconButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default Header;
