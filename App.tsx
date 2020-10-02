import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import KeyFeatureView from "@components/KeyFeatureView";
import StorybookPlayground from "@screens/StorybookPlayground";

export default function App() {
  return true ? (
    <StorybookPlayground />
  ) : (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <KeyFeatureView count={2} label="test" icon="bath" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
