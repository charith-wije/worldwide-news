import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Categoriesscreen = () => {
  const navigation = useNavigation();
  const categories = [
    { title: "Business", image: "business_image" },
    {
      title: "Entertainment",
      image: "entertainment_image",
    },
    { title: "General", image: "general_image" },
    { title: "Health", image: "health_image" },
    { title: "Science", image: "science_image" },
    { title: "Sports", image: "sports_image" },
    { title: "Technology", image: "technology_image" },
  ];

  const imageMapping = {
    business_image: require("../../../assets/images/business_image.png"),
    entertainment_image: require("../../../assets/images/entertainment_image.png"),
    general_image: require("../../../assets/images/general_image.png"),
    health_image: require("../../../assets/images/health_image.png"),
    science_image: require("../../../assets/images/science_image.png"),
    sports_image: require("../../../assets/images/sports_image.png"),
    technology_image: require("../../../assets/images/technology_image.png"),
  };

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const CategoryItem = ({ item, _ }) => {
    const category = item.title.toLowerCase();
    return (
      <TouchableOpacity
        style={{ width: windowWidth * 0.5 }}
        onPress={() => {
          navigation.navigate("Headline", {
            category,
          });
        }}
      >
        <ImageBackground
          style={{
            borderRadius: 10,
            width: windowWidth * 0.4,
            height: windowHeight * 0.2,
            alignSelf: "center",
            marginVertical: 20,
          }}
          resizeMode="stretch"
          source={imageMapping[item.image]}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: 20,
              flex: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#14193b" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 10,
          color: "white",
        }}
      >
        Categories
      </Text>

      <FlatList
        data={categories}
        renderItem={CategoryItem}
        keyExtractor={(_, index) => index}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 0,
          backgroundColor: "#14193b",
        }}
      />
    </View>
  );
};

export default Categoriesscreen;

const styles = StyleSheet.create({});
