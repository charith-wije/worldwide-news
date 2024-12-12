import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React, { useEffect, useState, createContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../organisms/NewsCard";
import { getNews } from "../../../redux/actions/newsAction";
import { useNavigation } from "@react-navigation/native";
import NewsDetailsModal from "../../organisms/NewsDetailsModal";

const CategoryHeadlineScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [text, setText] = useState(null);
  const [item, setItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { news } = useSelector((state) => state.news);
  const { category } = route.params;
  const context = createContext();

  const newsList = news?.articles?.filter((item, _) => item.author !== null);

  useEffect(() => {
    HandleSearch();
  }, []);

  const HandleSearch = () => {
    dispatch(
      getNews({
        endpoint: "top-headlines",
        params: { q: text, category },
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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#f5cd05",
            padding: 8,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            marginHorizontal: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 15,
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 20,
            marginRight: 10,
            flex: 7,
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

export default CategoryHeadlineScreen;

const styles = StyleSheet.create({});
