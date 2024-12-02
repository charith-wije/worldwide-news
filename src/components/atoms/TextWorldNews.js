import { Text } from "react-native";
import React from "react";

const TextWorldNews = ({ children, style, ...props }) => {
  return (
    <Text style={[style]} {...props}>
      {children}
    </Text>
  );
};

export default TextWorldNews;
