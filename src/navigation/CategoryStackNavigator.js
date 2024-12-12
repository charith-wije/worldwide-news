import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryHeadlineScreen from "../components/screens/bottomTabScreens/CategoryHeadlineScreen";
import Categoriesscreen from "../components/screens/bottomTabScreens/CategoriesScreen";
const Stack = createStackNavigator();

const CategoryStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Category" component={Categoriesscreen} />
      <Stack.Screen name="Headline" component={CategoryHeadlineScreen} />
    </Stack.Navigator>
  );
};

export default CategoryStackNavigator;

const styles = StyleSheet.create({});
