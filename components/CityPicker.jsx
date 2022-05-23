import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ModalListItem = ({ item, handleCitySelect }) => {
  return (
    <Pressable
      onPress={() => handleCitySelect(item)}
      style={styles.modalListItem}
    >
      <Text style={styles.modalListItemText}>
        {item.city_name} ({item.city_code})
      </Text>
    </Pressable>
  );
};

const ModalListItemSeparator = () => (
  <View style={styles.modalListItemSeparator} />
);

const CityPicker = ({ label, value, onCityChange, cities }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleCitySelect = (item) => {
    onCityChange(`${item.city_name} (${item.city_code})`);
    closeModal();
  };

  return (
    <View>
      <Pressable onPress={openModal} style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>

        <Text style={styles.cityText}>{value}</Text>
      </Pressable>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <ModalListItem item={item} handleCitySelect={handleCitySelect} />
            )}
            keyExtractor={(item) => item.city_code}
            ItemSeparatorComponent={ModalListItemSeparator}
            style={styles.modalList}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  labelContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#F8F9FA",
    bottom: 12,
    paddingHorizontal: 8,
  },
  labelText: {
    color: "#505168",
    fontSize: 16,
    fontFamily: "Syne_500Medium",
  },
  cityText: {
    fontFamily: "Syne_600SemiBold",
    fontSize: 18,
    color: "#202020",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000AA",
  },
  modalList: {
    borderRadius: 8,
    backgroundColor: "#F8F9FA",
    width: windowWidth - 36,
    maxHeight: windowHeight / 2,
    elevation: 2,
  },
  modalListItem: {
    paddingLeft: 24,
    paddingVertical: 12,
  },
  modalListItemText: {
    color: "black",
    fontFamily: "Syne_400Regular",
    fontSize: 18,
  },
  modalListItemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E5E5E5",
  },
});

export default CityPicker;
