import React from "react";
import { Image } from "react-native";
import { Text, View } from "../Themed";
import styles from "./style";
import { Song } from "../../types";

export type songListItemProp = {
  song: Song;
};

const SongListItem = (props: songListItemProp) => {
  const { song } = props;

  return (
    <View style={styles.Container}>
      <Image style={styles.SongImage} source={{ uri: song.imageUri }} />
      <View style={styles.NameList}>
        <Text style={styles.Songtitle}>{song.title}</Text>
        <Text style={styles.Songartist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
