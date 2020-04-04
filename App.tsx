import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CreateListScreen from "./screens/CreateListScreen";
import { RootStackParamList } from "./types/navigator.types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateList" component={CreateListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
