import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <Home />
    </SafeAreaView>
  );
}
