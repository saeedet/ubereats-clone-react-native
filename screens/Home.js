import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "../components/Categories";
import Header from "../components/Header";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
import { REACT_NATIVE_YELP_API_KEY } from "@env";

const options = {
  headers: {
    Authorization: `Bearer ${REACT_NATIVE_YELP_API_KEY}`,
  },
};

export default function Home() {
  const [restaurants, setRestaurants] = useState(null);
  const [errors, setErrors] = useState(null);
  const [city, setCity] = useState("LosAngeles");

  useEffect(() => {
    const getRestaurantsData = async () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

      fetch(yelpUrl, options)
        .then((res) => res.json())
        .then((json) => setRestaurants(json.businesses))
        .catch((err) => {
          setErrors("Couldn't fetch the data!! No good Bruh!");
        });
    };
    getRestaurantsData();
  }, [city]);

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
