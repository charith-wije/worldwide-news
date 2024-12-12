import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../../redux/reducers/bookmarkReducer";

const NewsCard = ({ item, setModalVisible, setItem, isBookmarks = false }) => {
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get("window").height;
  const { title, description, url, urlToImage, publishedAt, content, author } =
    item.item;

  return (
    <TouchableOpacity
      style={{
        height: windowHeight * 0.18,
        width: "97%",
        borderRadius: 20,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#dce0f5",
        alignSelf: "center",
      }}
      onPress={() => {
        setModalVisible(true);
        setItem(item);
      }}
    >
      <View
        style={{
          flex: 2,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          paddingLeft: 15,
          paddingVertical: 10,
        }}
      >
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
        <View style={{ flex: 3, justifyContent: "center" }}>
          <Text style={{ fontSize: 13 }} numberOfLines={3}>
            {description}{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              flex: 1,
            }}
          >
            {publishedAt?.split("T")[0]}
          </Text>
          <Text
            style={{
              backgroundColor: "#03fc4e",
              textAlign: "center",
              flex: 1,
              fontSize: 14,
              fontWeight: "bold",
              borderRadius: 5,
            }}
            numberOfLines={1}
          >
            {author?.trim().split(/\s+/).slice(0, 2).join(" ")}
          </Text>
        </View>
      </View>

      {urlToImage && (
        <Image
          style={{
            flex: 1,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{
            uri: urlToImage,
          }}
          resizeMode="cover"
        />
      )}
      {isBookmarks && (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            borderWidth: 2,
            borderColor: "#076ef5",
            borderRadius: 40,
            padding: 4,
          }}
          onPress={() => {
            dispatch(removeBookmark(item));
          }}
        >
          <MaterialIcons name="delete-outline" size={24} color="#076ef5" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
