import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import { SongList } from "../types";
import AlbumHeader from "../components/AlbumHeader";

export type SongListProp = {
  songList: SongList;
};

const AlbumScreen = (props: SongListProp) => {
  const { songList } = props;
  const route = useRoute();
  const { play, setPlay }: any = useState(false);

  //Fetching previous screen props data.
  React.useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View style={{ justifyContent: "center" }}>
      {/* <SongListItem song={albumDetails.songs[0]} /> */}
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({});
