import React from "react";
import { Image } from "react-native";
import { Text, View } from "../Themed";
import styles from "./style";
import { Song } from "../../types";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  return (
    <View style={styles.Container}>
      <Image style={styles.SongImage} source={{ uri: song.imageUri }} />
      <View style={styles.NameList}>
        <Text style={styles.Songtitle}>{song.title}</Text>
        <Text style={styles.Songartist}>{song.artist}</Text>
      </View>
      <View style={styles.threeDot}>
        <Ionicons
          name='ios-heart-empty'
          size={28}
          color='white'
          style={{ marginHorizontal: 20 }}
        />
        <AntDesign name='play' size={32} color='green' />
      </View>
    </View>
  );
};

export default PlayerWidget;
