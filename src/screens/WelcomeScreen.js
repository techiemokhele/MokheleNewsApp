import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../assets/images/local/newsReport.jpg")}
            className="flex-1 justify-center items-center pb-10"
        >
            <LinearGradient
                colors={["transparent", "rgba(166, 61, 47, 0.35)"]}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                }}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
            />
            <View className="flex-1 items-center justify-end max-w-[85%] space-y-4">
                <Text
                    className="text-4xl shadow-2xl text-white text-center tracking-wider"
                    style={{ fontSize: wp(10), fontFamily: "noticiaBold" }}
                >
                    Welcome to{"\n"}Live Updates App
                </Text>

                <Text
                    className="text-white text-center max-w-[85%] leading-12 tracking-wider"
                    style={{ fontSize: wp(4), fontFamily: "noticiaRegular" }}
                >
                    Discover the most recent news with our simple onboarding process.
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("HomeTabs")}
                className="bg-red-600 rounded-full p-4 justify-center items-center w-[90%] mt-8"
            >
                <Text
                    className="text-base text-white"
                    style={{ fontSize: wp(4), fontFamily: "noticiaRegular" }}
                >
                    Get started now
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}