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
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../redux/actions/newsAction";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const HeadLinesScreen = () => {
  const [text, setText] = useState("today");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getNews({
        endpoint: "everything",
        params: { q: text, from: "2024-11-04" },
      })
    );
  }, []);
  const { news } = useSelector((state) => state.news);
  console.log(news);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "blue",
        padding: 5,
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar animated={true} backgroundColor="blue" />
        <View
          style={{
            width: "95%",
            height: 50,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 15,
            paddingLeft: 10,
            alignSelf: "center",
            marginTop: 20,
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
              onChangeText={(text) => setText(text)}
              style={{
                width: "85%",
                borderRadius: 15,
                fontSize: 16,
              }}
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
          >
            <Ionicons name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default HeadLinesScreen;

const styles = StyleSheet.create({});
