import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./bottomTabNavigator";

const MainNavigator = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
