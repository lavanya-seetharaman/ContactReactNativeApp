import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigation";
import HomeNavigator from "./HomeNavigation";
import DrawerNavigator from "./DrawerNavigation";

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <HomeNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
