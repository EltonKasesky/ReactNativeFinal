import React, { useEffect, useState } from "react";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import NavigationTabs from "./src/components/NavigationTabs";
import NetInfo from "@react-native-community/netinfo";
import * as Animatable from "react-native-animatable";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require("./assets/splash.jpg")}
                    style={styles.splashImage}
                    resizeMode="cover"
                />
                <Animatable.Text
                    animation="fadeIn"
                    delay={800}
                    style={styles.splashText}
                >
                    Discover TV
                </Animatable.Text>
            </View>
        );
    }

    return (
        <AuthProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container} edges={["top"]}>
                    <StatusBar barStyle="dark-content" />
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{
                                headerShown: false,
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // animação de transição
                            }}
                        >
                            <Stack.Screen name="Tabs" component={NavigationTabs} />
                            {/* Adicione outras telas aqui, se necessário */}
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        paddingHorizontal: 20,
    },
});
