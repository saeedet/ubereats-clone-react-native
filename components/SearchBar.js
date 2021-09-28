import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.locationBtn}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchBtn}>
            <AntDesign name="clockcircle" size={11} />
            <Text style={styles.searchBtnText}>Search</Text>
          </View>
        )}
        placeholder="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  locationBtn: {
    marginLeft: 10,
  },
  searchBtn: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
  searchBtnText: {
    marginLeft: 6,
  },
});
