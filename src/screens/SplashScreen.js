import React, { useCallback, useEffect } from "react";
import { View, Text, ImageBackground, Platform, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashsScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function SplashScreen() {
    const navigation = useNavigation();

    const [fontsLoaded, fontsError] = useFonts({
        noticiaRegular: require("../fonts/noticiaRegular.ttf"),
        noticiaItalic: require("../fonts/noticiaItalic.ttf"),
        noticiaBold: require("../fonts/noticiaBold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontsError) {
            await SplashsScreen.hideAsync();
        }

        setTimeout(() => {
            navigation.navigate("Welcome");
        }, 5000)
    });

    useEffect(() => {
        onLayoutRootView();
    }, [fontsLoaded, fontsError]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground
            blurRadius={2}
            source={require("../../assets/images/local/newsReport.jpg")}
            className="flex-1 justify-center items-center"
        >
            <LinearGradient
                colors={["rgba(166, 61, 47, 0.35)", "rgba(166, 61, 47, 0.35)"]}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            <View style={onLayoutRootView} className="justify-center items-center px-7">
                <Image source={require("../../assets/images/logo-no-background.png")} style={{ width: 200, height: 200, resizeMode: "contain", }} />
                <Text className="text-white text-xl font-extrabold uppercase text-center"
                    style={{ fontSize: wp(6), fontFamily: "noticiaRegular" }}
                >
                    Brought to you by{"\n"}Neo Mokhele
                </Text>
            </View>
        </ImageBackground>
    )
}