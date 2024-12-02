import { TouchableOpacity } from "react-native";
import React from "react";

const TouchableOpacityWorldNews = ({ children, style, ...props }) => {
  return (
    <TouchableOpacity style={[style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityWorldNews;
