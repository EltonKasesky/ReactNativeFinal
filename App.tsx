import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DiscoverTV from "./src/API";
import DiscoverMovies from "./src/API/index2";
import NetInfo from "@react-native-community/netinfo";

const Drawer = createDrawerNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isConnected) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.noConnectionText}>Sem conexão com a internet</Text>
      </View>
    );
  }

  if (showSplash) {
    return (
      <View style={styles.centeredContainer}>
        <Image
          source={require("./assets/splash.jpg")}
          style={styles.splashImage}
          resizeMode="cover"
        />
        <Text style={styles.splashText}>Discover TV</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="TV Shows"
        screenOptions={{
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#bfa14a",
          drawerActiveTintColor: "#bfa14a",
          drawerInactiveTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#7B01FF",
            width: 170,
          },
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="TV Shows" component={DiscoverTV} />
        <Drawer.Screen name="Movies" component={DiscoverMovies} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: 180,
    height: 180,
    marginBottom: 18,
    borderRadius: 14,
  },
  splashText: {
    color: "#bfa14a",
    fontSize: 26,
    fontWeight: "bold",
  },
  noConnectionText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 18,
  },
});