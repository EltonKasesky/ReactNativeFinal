import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuemSomos from "./src/screens/QuemSomos";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#7B01FF",
          tabBarInactiveBackgroundColor: "blue",
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="Quem somos"
          component={QuemSomos}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="info" color="black" size={20} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",

    margin: 10,
  },
});
