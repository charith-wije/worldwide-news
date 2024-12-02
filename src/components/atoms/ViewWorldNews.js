import { View } from "react-native";
import React from "react";

const ViewWorldNews = ({ children, style, ...props }) => {
  return (
    <View style={[style]} {...props}>
      {children}
    </View>
  );
};

export default ViewWorldNews;
