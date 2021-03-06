import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DatePicker = ({ label, width = "48%", value, onChange }) => {
  const [show, setShow] = useState(false);

  const handleChange = (_event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    onChange(currentDate);
  };

  const showDatePicker = () => setShow(true);

  return (
    <Pressable onPress={showDatePicker} style={[styles.container, { width }]}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome5 name="calendar-minus" size={24} color="#111827" />
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{dateToDisplayFormat(value)}</Text>
      </View>

      {show && (
        <DateTimePicker value={value} mode="date" onChange={handleChange} />
      )}
    </Pressable>
  );
};

const dateToDisplayFormat = (date) => {
  const dateString = date.toDateString();
  const dayName = dateString.substr(0, 3);
  const monthName = dateString.substr(4, 3);
  const day = Number(dateString.substr(8, 2));
  return `${dayName}, ${day} ${monthName}`;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
  },
  labelContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    bottom: 16,
    backgroundColor: "#F8F9FA",
    alignSelf: "flex-start",
  },
  labelText: {
    color: "#505168",
    fontSize: 16,
    fontFamily: "Syne_500Medium",
  },
  iconContainer: {
    marginBottom: 16,
    marginLeft: 8,
  },
  dateContainer: {
    marginBottom: 16,
  },
  dateText: {
    fontFamily: "Syne_600SemiBold",
    fontSize: 18,
    color: "#202020",
  },
});

export default DatePicker;
