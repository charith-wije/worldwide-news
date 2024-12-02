import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextWorldNews from "../atoms/TextWorldNews";
import TextInputWorldNews from "../atoms/TextInputWorldNews";
import ViewWorldNews from "../atoms/ViewWorldNews";

const FormInputWorldNews = ({ children, style, ...props }) => {
  const { label, onChangeText, value, error } = props;
  return (
    <>
      <ViewWorldNews style={styles.labelContainer}>
        <TextWorldNews style={[styles.label]}>{label}</TextWorldNews>
        {error ? (
          <TextWorldNews style={[styles.error]}>{error}</TextWorldNews>
        ) : null}
      </ViewWorldNews>
      <TextInputWorldNews
        {...props}
        onChangeText={onChangeText}
        value={value}
        style={styles.textInput}
      />
    </>
  );
};

export default FormInputWorldNews;

const styles = StyleSheet.create({
  label: {
    color: "#424242",
    width: "45%",
    marginLeft: "5%",
  },
  textInput: {
    backgroundColor: "#e0e0de",
    padding: 16,
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 5,
  },
  error: {
    color: "red",
    fontSize: 14,
    width: "90%",
    textAlign: "left",
    marginLeft: "5%",
  },
  labelContainer: {
    justifyContent: "space-between",
  },
});
