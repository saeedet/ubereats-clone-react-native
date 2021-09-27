import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <Home />
    </SafeAreaView>
  );
}
