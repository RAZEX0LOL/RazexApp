import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../../context/authContext";
import { Button } from "react-native";

export default function Home(){
    const {logout}=useAuth();
    const handleLogout=async()=>{
        await logout();
    }
    return(
        <View>
            <Text>Home</Text>
            {/* <Button title="Выйти" onPress={handleLogout}/> */}
            <Pressable onPress={handleLogout}>
                <Text>Выйти</Text>
            </Pressable>
        </View>
    );
}