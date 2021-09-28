import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const [selectedBtn, setSelectedBtn] = useState("Delivery");
  const pressHandler = (text) => {
    setSelectedBtn(text);
  };
  return (
    <View style={styles.container}>
      <HeaderButton
        text={"Delivery"}
        pressHandler={pressHandler}
        selectedBtn={selectedBtn}
      />
      <HeaderButton
        text={"Pickup"}
        pressHandler={pressHandler}
        selectedBtn={selectedBtn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
