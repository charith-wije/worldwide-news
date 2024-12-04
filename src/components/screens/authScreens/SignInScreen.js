import React from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import FormInputWorldNews from "../../molecules/FormInputWorldNews";
import SubmitButtonWorldNews from "../../molecules/SubmitButtonWorldNews";

import { login, logout } from "../../../redux/reducers/authReducer";
import { useSQLiteContext } from "expo-sqlite";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const loginDetails = {
  email: "",
  password: "",
};

const SignInScreen = () => {
  const navigation = useNavigation();
  const db = useSQLiteContext();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Invalid email!")
      .required("Email is required!"),
    password: Yup.string()
      .trim()
      .min(8, "Password is too short!")
      .required("password is required!"),
  });

  const handleLogin = async (values) => {
    const { email, password } = values;
    try {
      const user = await db.getFirstAsync(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (!user) {
        Alert.alert("Error", "Email does not exist !");
        return;
      }

      const validUser = await db.getFirstAsync(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password]
      );
      if (validUser) {
        Alert.alert("Success", "Login successful!");
      }
    } catch (err) {}
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
    >
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
              style={{ width: "90%", height: 220, resizeMode: "contain" }}
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
          <Formik
            initialValues={loginDetails}
            validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
              setTimeout(() => {
                console.log(values);
                console.log(isLoggedIn);
                formikActions.resetForm();
                formikActions.setSubmitting(false);
                handleLogin(values);
                dispatch(login());
              }, 3000);
            }}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              const { email, password } = values;
              return (
                <>
                  <View style={{ flex: 1, marginBottom: 25 }}>
                    <FormInputWorldNews
                      value={email}
                      placeholder="Enter Email"
                      label="Email"
                      keyboardType="email-address"
                      onBlur={handleBlur("email")}
                      error={touched.email && errors.email}
                      onChangeText={handleChange("email")}
                    />

                    <FormInputWorldNews
                      value={password}
                      placeholder="Password"
                      label="Password"
                      secureTextEntry
                      onBlur={handleBlur("password")}
                      error={touched.password && errors.password}
                      onChangeText={handleChange("password")}
                    />
                    <TouchableOpacity
                      style={{ alignItems: "flex-end", marginBottom: 20 }}
                    >
                      <Text style={{ color: "#424242", textAlign: "right" }}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <SubmitButtonWorldNews
                      label="Login"
                      onPress={handleSubmit}
                      submitting={isSubmitting}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "600",
                        marginVertical: 10,
                      }}
                    >
                      Or
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#e0e0de",
                          width: 50,
                          height: 50,
                          borderRadius: 10,
                          marginHorizontal: 10,
                        }}
                      >
                        <Image
                          source={require("../../../assets/images/google_image.png")}
                          style={{
                            width: 30,
                            height: 30,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#e0e0de",
                          width: 50,
                          height: 50,
                          borderRadius: 10,
                          marginHorizontal: 10,
                        }}
                      >
                        <Image
                          source={require("../../../assets/images/facebook_image.png")}
                          style={{
                            width: 30,
                            height: 30,
                            resizeMode: "contain",
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        flexDirection: "row",
                        marginTop: 20,
                      }}
                    >
                      <Text
                        style={{
                          color: "#424242",
                          fontWeight: "700",
                          marginRight: 5,
                        }}
                      >
                        Don't have an account?
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                      >
                        <Text style={{ color: "#f5cd05", fontWeight: "700" }}>
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              );
            }}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
