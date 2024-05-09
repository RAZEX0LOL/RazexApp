import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function StartPage(){
    return(
        <View className="flex-1 justify-center item-center">
            <ActivityIndicator size={"large"} color={"gray"}/>
        </View>
    );
}