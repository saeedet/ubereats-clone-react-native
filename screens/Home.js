import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "../components/Categories";
import Header from "../components/Header";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const YELP_API_KEY =
  "LBBl5bds53DdxAF2VgBfUzP2zTCxACQGVbUmQSE12II4TmxMLKRCPP5szU1JFxpgxi-4GYwbPB1RjSw30z-tlsAeB-nEjKYxS4geBosQcY5r1b-hFziX-I4ZZaZSYXYx";
const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Sydney`;
const options = {
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
};

export default function Home() {
  const [restaurants, setRestaurants] = useState(null);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const getRestaurantsData = async () => {
      //   await axios
      //     .get(yelpUrl, options)
      //     .then((response) => {
      //       setRestaurants(response.data.businesses);
      //     })
      await fetch(yelpUrl, options)
        .then((res) => res.json())
        .then((json) => setRestaurants(json.businesses))
        .catch((err) => {
          setErrors("err happend bro");
        });
      //   await fetch(yelpUrl, options)
      //     .then((res) => res.json())
      //     .then((json) => setRestaurants(json.businesses));
    };
    getRestaurantsData();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Header />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {errors && <Text>{errors}</Text>}
        {restaurants &&
          restaurants.map((item) => (
            <RestaurantItem
              key={item.id}
              name={item.name}
              image={item.image_url}
              rating={item.rating}
            />
          ))}
        {/* <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    padding: 15,
  },
});
