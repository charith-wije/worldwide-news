import { TextInput } from "react-native";
import React from "react";

const TextInputWorldNews = ({
  children,
  style,
  onChangeText,
  value,
  ...props
}) => {
  return (
    <TextInput
      style={[style]}
      value={value}
      onChangeText={onChangeText}
      {...props}
    >
      {children}
    </TextInput>
  );
};

export default TextInputWorldNews;
