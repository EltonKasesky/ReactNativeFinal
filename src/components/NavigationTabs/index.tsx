import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import QuemSomos from "../../screens/QuemSomos";
import AuthSwitcher from "../AuthSwitcher";
import LogoutHandler from "../LogoutHandler";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#7B01FF",
                tabBarShowLabel: true,
            }}
        >
            <Tab.Screen
                name="Quem somos"
                component={QuemSomos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="lightbulb-o" size={20} color={color} />
                    ),
                }}
            />

            {!isAuthenticated ? (
                <Tab.Screen
                    name="Login"
                    component={AuthSwitcher}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="arrow-right" size={20} color={color} />
                        ),
                    }}
                />
            ) : (
                <Tab.Screen
                    name="Logout"
                    component={LogoutHandler}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="sign-out" size={20} color={color} />
                        ),
                    }}
                />
            )}
        </Tab.Navigator>
    );
}
