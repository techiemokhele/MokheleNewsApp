import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

//screens
import {
    HomeScreen,
    DiscoverScreen,
    SaveScreen,
    SearchScreen,
    SplashScreen,
    WelcomeScreen,
    NewsDetailsScreen
} from "../screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Discover") {
                            iconName = focused ? "ios-compass" : "ios-compass-outline"
                        }
                        else if (route.name === "Saved") {
                            iconName = focused ? "bookmark" : "bookmark-o"
                        }
                        else if (route.name === "Search") {
                            iconName = focused ? "text-box-search" : "text-box-search-outline"
                        }

                        const customIconSize = 25;

                        if (route.name === "Home") {
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={customIconSize}
                                    color={focused ? "red" : "gray"}
                                />
                            )
                        }
                        else if (route.name === "Discover") {
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={customIconSize}
                                    color={focused ? "red" : "gray"}
                                />
                            )
                        }
                        else if (route.name === "Saved") {
                            return (
                                <FontAwesome
                                    name={iconName}
                                    size={customIconSize}
                                    color={focused ? "red" : "gray"}
                                />
                            )
                        }
                        else if (route.name === "Search") {
                            return (
                                <MaterialCommunityIcons
                                    name={iconName}
                                    size={customIconSize}
                                    color={focused ? "red" : "gray"}
                                />
                            )
                        }
                    },
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: "noticiaRegular",
                    },
                    tabBarStyle: {
                        backgroundColor: colorScheme === "dark" ? "black" : "white",
                    }
                })}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Saved" component={SaveScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen
                    name="NewsDetails"
                    component={NewsDetailsScreen}
                    options={{ animation: "slide_from_bottom" }}
                />
                <Stack.Screen name="HomeTabs" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}