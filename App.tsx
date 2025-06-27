import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import NavigationTabs from "./src/components/NavigationTabs";

export default function App() {
    return (
        <AuthProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container} edges={["top"]}>
                    <StatusBar barStyle="dark-content" />
                    <NavigationContainer>
                        <NavigationTabs />
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
});
