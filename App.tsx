import { View, Text, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuemSomos from "./src/screens/QuemSomos";
import { FontAwesome } from "@expo/vector-icons";
import AuthSwitcher from './src/utils/AuthSwitcher';
import { AuthProvider } from './src/context/AuthContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
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
           <Tab.Screen
            name="Login"
            component={AuthSwitcher}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <FontAwesome name="info" color="black" size={20} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
