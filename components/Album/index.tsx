import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, View } from "../Themed";
import styles from "./style";
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";
export type AlbumProps = {
  album: Album;
};
const { width, height } = Dimensions.get("window");
const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();
  const navigateToAlbum = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
    console.log(`${props.album.artistsHeadline}`);
  };

  // const { id, imageUri, artistHeadLine } = ;
  return (
    <TouchableWithoutFeedback onPress={navigateToAlbum}>
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
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
