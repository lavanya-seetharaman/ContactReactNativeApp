import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Login = () => {
  return (
    <View>
      <Text>Hi from Login Page</Text>
    </View>
  );
};

const Signup = () => {
  return (
    <View>
      <Text>Hi from Signup Page</Text>
    </View>
  );
};

const AuthNavigation = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
