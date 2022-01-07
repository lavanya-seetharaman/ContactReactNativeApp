import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigation";
import AuthNavigator from "./AuthNavigation";

const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen
        name="Home"
        component={HomeNavigator}
      ></DrawerStack.Screen>
      <DrawerStack.Screen
        name="Login"
        component={AuthNavigator}
      ></DrawerStack.Screen>
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
