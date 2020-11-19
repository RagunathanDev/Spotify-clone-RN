import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
  EvilIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PremiumeScreen from "../screens/PremiumeScreen";
import AlbumScreen from "../screens/AlbumScreen";
import {
  BottomTabParamList,
  HomeParamList,
  SearchParamList,
  LibraryParamList,
  PremiumeParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home-circle'
              style={{ marginBottom: -3 }}
              color={color}
              size={28}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name='search'
              style={{ marginBottom: -3 }}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Library'
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='library-music-outline'
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Premiume'
        component={PremiumeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name='spotify'
              color={color}
              size={24}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// https://icons.expo.fyi/  --- Icon Library

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerTitleStyle: {
            color: Colors.dark.tabIconSelected,
            alignSelf: "center",
          },
        }}
      />
      <HomeStack.Screen
        name='AlbumScreen'
        component={AlbumScreen}
        options={{ headerTitle: "Album" }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          headerTitle: "Search",
          headerTitleStyle: {
            color: Colors.dark.tabIconSelected,
            alignSelf: "center",
          },
        }}
      />
    </SearchStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();
function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name='LibraryScreen'
        component={LibraryScreen}
        options={{
          headerTitle: "Library",
          headerTitleStyle: {
            color: Colors.dark.tabIconSelected,
            alignSelf: "center",
          },
        }}
      />
    </LibraryStack.Navigator>
  );
}

const PremiumeStack = createStackNavigator<PremiumeParamList>();

function PremiumeNavigator() {
  return (
    <PremiumeStack.Navigator>
      <PremiumeStack.Screen
        name='PremiumeScreen'
        component={PremiumeScreen}
        options={{
          headerTitle: "Premiume",
          headerTitleStyle: {
            color: Colors.dark.tabIconSelected,
            alignSelf: "center",
          },
        }}
      />
    </PremiumeStack.Navigator>
  );
}
