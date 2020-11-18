import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";

const { width, height } = Dimensions.get("window");

const PremiumeScreen = () => {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png",
        }}
        style={{ width: width - 30, height: 400 }}
      />
    </View>
  );
};

export default PremiumeScreen;

const styles = StyleSheet.create({});
