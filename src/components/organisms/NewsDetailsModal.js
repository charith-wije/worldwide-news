import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateBookmark } from "../../redux/reducers/bookmarkReducer";

const NewsDetailsModal = ({ modalVisible, setModalVisible, item }) => {
  const { title, description, url, urlToImage, publishedAt, content, author } =
    item.item;
  const date = new Date(publishedAt);
  let finalContent = content?.replace(/\[\+\d+ chars\]/, "");

  const { bookmarks } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  const handlePress = () => {
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
  };
  return (
    <Modal
      animationType="slide" // Options: 'none', 'slide', 'fade'
      transparent={true} // If true, modal will not fill the entire screen
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)} // Android back button handler
    >
      <ScrollView contentContainerStyle={styles.modalBackground}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
          <Text
            style={{
              width: "100%",
              fontSize: 22,
              fontWeight: 500,
              textAlign: "justify",
            }}
          >
            {title}
          </Text>
          <View style={{ width: "100%", marginVertical: 10, marginBottom: 10 }}>
            <Text>
              {formatter.format(date)} by{" "}
              <Text style={{ fontWeight: 800 }}>{author}</Text>
            </Text>
          </View>
          {urlToImage && (
            <Image
              style={{
                width: "100%",
                aspectRatio: 1.5,
                borderRadius: 15,
                marginBottom: 20,
              }}
              source={{
                uri: urlToImage,
              }}
              resizeMode="cover"
            />
          )}
          <Text style={{ fontSize: 16, fontWeight: 400, marginBottom: 10 }}>
            {description}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 400 }}>
            {finalContent}
            <Pressable onPress={handlePress} style={{}}>
              <Text style={{ fontSize: 16, color: "blue" }}>See more</Text>
            </Pressable>
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 40,
            padding: 10,
          }}
          onPress={() => {
            dispatch(updateBookmark(item));
          }}
        >
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

export default NewsDetailsModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalContent: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
