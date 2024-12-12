import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  FlatList,
  Modal,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../redux/actions/newsAction";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NewsCard from "../../organisms/NewsCard";
import NewsDetailsModal from "../../organisms/NewsDetailsModal";

const HeadLinesScreen = () => {
  const [text, setText] = useState("new");
  const [item, setItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    HandleSearch();
  }, []);

  const { news } = useSelector((state) => state.news);

  const newsList = news?.articles?.filter((item, _) => item.author !== null);

  const HandleSearch = () => {
    dispatch(
      getNews({
        endpoint: "everything",
        params: { q: text },
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#14193b",
        padding: 5,
      }}
    >
      <StatusBar animated={true} backgroundColor="#14193b" />
      <View
        style={{
          width: "95%",
          height: 50,
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 15,
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flex: 5,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            value={text}
            onChangeText={setText}
            style={{
              width: "85%",
              borderRadius: 15,
              fontSize: 18,
            }}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: "100%",
            backgroundColor: "grey",
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
          }}
          onPress={HandleSearch}
        >
          <Ionicons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {item && (
        <NewsDetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={item}
        />
      )}
      {newsList?.length !== 0 && (
        <FlatList
          data={newsList}
          keyExtractor={(_, index) => index}
          renderItem={(item, _) => (
            <NewsCard
              item={item}
              setModalVisible={setModalVisible}
              setItem={setItem}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HeadLinesScreen;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#14193b",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
