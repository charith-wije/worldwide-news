import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <SafeAreaView style={{ flex: 2, backgroundColor: "blue" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#f5cd05",
              padding: 8,
              borderBottomLeftRadius: 10,
              borderTopRightRadius: 10,
              marginLeft: 10,
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/images/news_image.png")}
            style={{ width: "90%", height: 250, resizeMode: "contain" }}
          />
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView
        style={{
          flex: 3,
          paddingTop: 32,
          paddingHorizontal: 25,
          backgroundColor: "white",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      >
        <Text style={{ color: "#424242", marginLeft: 12 }}>Email Address</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0de",
            padding: 16,
            borderRadius: 20,
            marginBottom: 15,
            marginTop: 5,
          }}
          placeholder="Enter Email"
        />

        <Text style={{ color: "#424242", marginLeft: 12 }}>Password</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0de",
            padding: 16,
            marginBottom: 3,
            borderRadius: 20,
            marginBottom: 5,
            marginTop: 5,
          }}
          secureTextEntry
          placeholder="Enter Password"
        />
        <TouchableOpacity style={{ alignItems: "flex-end", marginBottom: 20 }}>
          <Text style={{ color: "#424242", textAlign: "right" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 16,
            backgroundColor: "#f5cd05",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#4a4a49",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Or
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
