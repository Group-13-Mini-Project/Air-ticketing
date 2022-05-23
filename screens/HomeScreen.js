import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, CityPicker, DatePicker } from "../components";

// TODO
// 1. FlightType component - active button + animations

const HomeScreen = () => {
  const [flightType, setFlightType] = useState("economy");
  const [cities, setCities] = useState(null);
  const [fromCity, setFromCity] = useState("Accra (ACC)");
  const [toCity, setToCity] = useState("Kumasi (KMS)");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  useEffect(() => {
    fetch("https://easy-fly.herokuapp.com/cities/")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

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
        <View
          style={{
            flexDirection: "row",
            marginBottom: 36,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginRight: 16,
              backgroundColor: "#505168",
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Syne_400Regular",
                fontSize: 14,
              }}
            >
              Economy
            </Text>
          </View>

          <View style={{ marginRight: 16 }}>
            <Text style={{ fontFamily: "Syne_400Regular", fontSize: 14 }}>
              Business
            </Text>
          </View>

          <View>
            <Text style={{ fontFamily: "Syne_400Regular", fontSize: 14 }}>
              First Class
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 24 }}>
          <View style={{ marginBottom: 28 }}>
            <CityPicker
              label="From"
              value={fromCity}
              onCityChange={setFromCity}
              cities={cities}
            />
          </View>

          <CityPicker
            label="To"
            value={toCity}
            onCityChange={setToCity}
            cities={cities}
          />
        </View>

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
            console.log("searching for flight", {
              fromCity,
              toCity,
              departureDate,
              returnDate,
            })
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
