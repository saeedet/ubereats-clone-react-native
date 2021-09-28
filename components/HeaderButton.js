import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HeaderButton({ text, selectedBtn, pressHandler }) {
  return (
    <TouchableOpacity
      onPress={() => pressHandler(text)}
      style={selectedBtn === text ? styles.containerSelected : styles.container}
    >
      <Text style={selectedBtn === text ? styles.textSelected : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
  containerSelected: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  textSelected: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
});
