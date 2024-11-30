import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/screens/authScreens/SignInScreen";
import SignUpScreen from "../components/screens/authScreens/SignUpScreen";
import WelcomeScreen from "../components/screens/authScreens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
