import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

// Screens
import BookmarksScreen from "../components/screens/bottomTabScreens/BookmarksScreen";
import Categoriesscreen from "../components/screens/bottomTabScreens/CategoriesScreen";
import HeadLinesScreen from "../components/screens/bottomTabScreens/HeadLinesScreen";
import ProfileScreen from "../components/screens/bottomTabScreens/ProfileScreen";

// Screen Names
const homeName = "Home";
const catagoriesName = "Catagories";
const bookmarksname = "Bookmarks";
const profileName = "Profile";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routName = route.name;

          if (routName === homeName) {
            iconName = focused ? "home" : "home-outline";
          }
          if (routName === catagoriesName) {
            iconName = focused
              ? "ellipsis-horizontal"
              : "ellipsis-horizontal-outline";
          }
          if (routName === bookmarksname) {
            iconName = focused ? "bookmark" : "bookmark-outline";
          }
          if (routName === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#efb810",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: "#011f8c" },
        headerTitleAlign: "center",
        headerShown: false,
      })}
    >
      <BottomTab.Screen
        name={homeName}
        component={HeadLinesScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={catagoriesName}
        component={Categoriesscreen}
        // options={{
        //   headerTitle: () => <MatchesScreenHeader />,
        //   headerLeft: () => (
        //     <BracketView style={{ marginLeft: 15 }}>
        //       <Ionicons name="bag-add-outline" size={30} color="white" />
        //     </BracketView>
        //   ),
        //   headerRight: () => (
        //     <BracketView style={{ marginRight: 15 }}>
        //       <Ionicons name="person-circle-outline" size={30} color="white" />
        //     </BracketView>
        //   ),
        //   headerStyle: { backgroundColor: "blue" },
        // }}
      />
      <BottomTab.Screen name={bookmarksname} component={BookmarksScreen} />
      <BottomTab.Screen name={profileName} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
