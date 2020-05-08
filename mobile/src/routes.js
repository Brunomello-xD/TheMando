import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import cases from "./pages/cases";
import detailCase from "./pages/detailCase";
import newCase from "./pages/newCase";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="cases" component={cases} />
        <AppStack.Screen name="detailCase" component={detailCase} />
        <AppStack.Screen name="newCase" component={newCase} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
