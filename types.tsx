export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premiume: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type LibraryParamList = {
  LibraryScreen: undefined;
};

export type PremiumeParamList = {
  PremiumeScreen: undefined;
};

//Album types
export type Album = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
};

//Song Item
export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};

//SongList for Screen
export type SongList = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: Number;
  imageUri: string;
  artistsHeadline: string;
  songs: Song[];
};
