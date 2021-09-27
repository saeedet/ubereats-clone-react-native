import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderButton = ({ text }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButton;
