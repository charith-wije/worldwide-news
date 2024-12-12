import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "../../organisms/NewsCard";
import NewsDetailsModal from "../../organisms/NewsDetailsModal";

const BookmarksScreen = () => {
  const { bookmarks } = useSelector((state) => state.bookmark);
  const [item, setItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#14193b", padding: 5 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 10,
          color: "white",
        }}
      >
        Bookmarks
      </Text>
      {item && (
        <NewsDetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={item}
        />
      )}
      {bookmarks?.length !== 0 && (
        <FlatList
          data={bookmarks}
          keyExtractor={(_, index) => index}
          renderItem={(item, _) => (
            <NewsCard
              item={item.item}
              setModalVisible={setModalVisible}
              setItem={setItem}
              isBookmarks={true}
            />
          )}
        />
      )}
    </View>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({});
