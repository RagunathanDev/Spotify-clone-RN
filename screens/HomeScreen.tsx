import * as React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import AlbumCategory from "../components/AlbumCategory";
import albumcategories from "../data/albumCatgories";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumcategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
