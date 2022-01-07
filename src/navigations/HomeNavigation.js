import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Contacts = () => {
  return (
    <View>
      <Text>Hi from Contact Page</Text>
    </View>
  );
};

const ContactDetail = () => {
  return (
    <View>
      <Text>Hi from Contact Detail Page</Text>
    </View>
  );
};

const CreateContact = () => {
  return (
    <View>
      <Text>Hi from Create Contact Page</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings Page</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="ContactDetail"
        component={ContactDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="CreateContact"
        component={CreateContact}
      ></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
