import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, DatePicker } from "../components";

const HomeScreen = () => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Choose</Text>
          <Text style={styles.headerTitle}>Your Flight</Text>
        </View>

        <View style={styles.headerButtonsContainer}>
          <Text style={[styles.headerButtonsText]}>Round Trip</Text>

          <Text style={[styles.headerButtonsText, { opacity: 0.5 }]}>
            Round Trip
          </Text>
        </View>
      </View>

      <View style={styles.searchForm}>
        <View style={styles.datesPickerContainer}>
          <DatePicker
            label="Departure"
            onChange={setDepartureDate}
            value={departureDate}
          />

          <DatePicker
            label="Return"
            onChange={setReturnDate}
            value={returnDate}
          />
        </View>

        <Button
          backgroundColor="#505168"
          onPress={() =>
            console.log("searching for flight", { departureDate, returnDate })
          }
          title="Search Flight"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  headerContainer: {
    backgroundColor: "#505168",
    borderRadius: 8,
    marginHorizontal: 24,
    marginVertical: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitleContainer: {
    marginBottom: 64,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontFamily: "Syne_600SemiBold",
    fontSize: 24,
  },
  headerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButtonsText: {
    color: "#FFFFFF",
    fontFamily: "Syne_600SemiBold",
    fontSize: 16,
  },
  searchForm: {
    marginHorizontal: 24,
  },
  datesPickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 48,
  },
});

export default HomeScreen;
