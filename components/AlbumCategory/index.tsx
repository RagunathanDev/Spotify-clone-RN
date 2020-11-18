import React from "react";
import styles from "./style";
import { Text, View } from "../Themed";
import { Album } from "../../types";
import { FlatList } from "react-native";
import AlbumComponent from "../Album";

export type AlbumCategoryProps = {
  title: string;
  albums: Album[];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View>
      <Text style={styles.title}> {props.title} </Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
