import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Text, View } from "../Themed";
import styles from "./style";
import { Album } from "../../types";

export type AlbumProps = {
  album: Album;
};
const { width, height } = Dimensions.get("window");
const AlbumComponent = (props: AlbumProps) => {
  // const { id, imageUri, artistHeadLine } = ;
  return (
    <View style={styles.album__container}>
      {/* Required album_id,album_ImageUri and album artist name */}
      <Image
        source={{ uri: props.album.imageUri }}
        style={styles.album__image}
      />
      <Text style={styles.album__artistName}>
        {props.album.artistsHeadline}
      </Text>
    </View>
  );
};

export default AlbumComponent;
