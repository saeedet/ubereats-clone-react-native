import React from "react";
import { View, Text } from "react-native";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <View>
      <HeaderButton text={"Delivery"} />
      <HeaderButton text={"Pickup"} />
    </View>
  );
};

export default Header;
