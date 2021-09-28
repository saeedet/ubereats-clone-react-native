import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem({ name, image, rating }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: image,
          }}
        />
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.infoTitle}>{name}</Text>
            <Text style={styles.infoSubTitle}>30-45 . min</Text>
          </View>
          <View style={styles.infoRating}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 15,
  },
  img: {
    width: "100%",
    height: 180,
  },
  heartIcon: {
    color: "#fff",
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSubTitle: {
    fontSize: 13,
    color: "gray",
  },
  infoRating: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
