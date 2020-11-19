import React, { useState } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Text, View } from "../Themed";
import { SongList } from "../../types";
import { TouchableOpacity } from "react-native-gesture-handler";

export type albumHeaderProps = {
  album: SongList;
};

// const Capitalize = (str: string) => {
//   console.log(str.slice(1));
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

const AlbumHeader = (props: albumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.Container}>
      {/* image name by numberOfLikes playButton */}
      <Image style={styles.HeaderImage} source={{ uri: album.imageUri }} />
      <Text style={styles.albumName}>{album.name}</Text>
      <View style={styles.innerContainer}>
        <Text>BY {album.by} </Text>
        <Text style={{ marginHorizontal: 6 }}>-</Text>
        <Text>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        {/* {value ? (
          <Text style={styles.toggleButton}>PAUSE</Text>
        ) : ( */}
        <Text style={styles.toggleButton}>PLAY</Text>
        {/* )} */}
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderImage: {
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2,
    margin: 15,
  },
  albumName: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
    textTransform: "capitalize",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  playButton: {
    borderWidth: 1,
    borderColor: "#6eb85a",
    width: width * 0.3,
    height: width * 0.1,
    backgroundColor: "#5a8c4c",
    justifyContent: "center",
    borderRadius: width * 0.1,
    margin: 10,
  },
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
