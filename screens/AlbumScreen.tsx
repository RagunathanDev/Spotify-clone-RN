import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useNavigation, useRoute } from "@react-navigation/native";

const AlbumScreen = () => {
  const route = useRoute();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello from AlbumScreen</Text>
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({});
