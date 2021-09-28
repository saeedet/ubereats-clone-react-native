import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CategoryItem({ item, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text style={styles.txt}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 30,
  },
  img: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  txt: {
    fontSize: 13,
    fontWeight: "900",
  },
});
