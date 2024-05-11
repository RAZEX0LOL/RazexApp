import {View, Text,Image, Pressable, Alert} from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";


export default function SignUp(){
    const router=useRouter();
    const [loading,setLoading]=useState(false);

    const emailRef=useRef("");

    const passwordRef=useRef("");

    const profileUrl=useRef("");

    const handleRegister =async()=>{
        if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileUrl.current){
            Alert.alert("Регистрация","Пожалуйста заполните все поля");
            return;
        }


    }

    return(
        <CustomKeyboardView>
        <View className="flex-1">
            <StatusBar style="dark"/>
            <View style={{paddingTop: hp(5),paddingHorizontal:wp(5)}} className="flex-1">
                <View className="items-center">
                    <Image style={{height:hp(30)}} resizeMode="contain" source={require('../assets/images/register.jpg')}/>
                </View>



                <View className="gap-5">
                    <Text style={{fontSize:hp(5)}} className="font-bold tracking-wider text-center text-neutral-800" >Регистрация</Text>
                    <View className="gap-4">
                        <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-violet-300 items-center rounded-xl">
                            <Feather name="user" size={hp(2.7)} color={"black"}/>
                            <TextInput
                                onChangeText={value=>usernameRef.current=value}
                                style={{fontSize:hp(2)}}
                                className="flex-1 font-semibold text-neutral-900"
                                placeholder="Username"
                                placeholderTextColor={"gray"}
                            />
                        </View>
                        <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-violet-300 items-center rounded-xl">
                            <Octicons name="mail" size={hp(2.7)} color={"black"}/>
                            <TextInput
                                onChangeText={value=>emailRef.current=value}
                                style={{fontSize:hp(2)}}
                                className="flex-1 font-semibold text-neutral-900"
                                placeholder="Email address"
                                placeholderTextColor={"gray"}
                            />
                        </View>
                            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-violet-300 items-center rounded-xl">
                                <Octicons name="lock" size={hp(2.7)} color={"black"}/>
                                <TextInput
                                    onChangeText={value=>passwordRef.current=value}
                                    style={{fontSize:hp(2)}}
                                    className="flex-1 font-semibold text-neutral-900"
                                    placeholder="Password"
                                    secureTextEntry
                                    placeholderTextColor={"gray"}
                                />
                            </View>
                            <View style={{height:hp(7)}} className="flex-row gap-4 px-4 bg-violet-300 items-center rounded-xl">
                            <Feather name="image" size={hp(2.7)} color={"black"}/>
                            <TextInput
                                onChangeText={value=>profileUrl.current=value}
                                style={{fontSize:hp(2)}}
                                className="flex-1 font-semibold text-neutral-900"
                                placeholder="Avatar url"
                                placeholderTextColor={"gray"}
                            />
                        </View>


                    <View>
                            {
                                loading?(
                                        <View className="flex-row justify-center">
                                            <Loading size={hp(6.5)}/>
                                        </View>
                                ):(
                                    <TouchableOpacity onPress={handleRegister} style={{height: 50, backgroundColor: '#c4b5fd', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                                            Зарегистрироваться
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>

                        


                        <View className="flex-row justify-center">
                            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-600">Есть аккаунт? </Text>
                            <Pressable onPress={()=>router.push('signIn')}>
                                <Text style={{fontSize:hp(1.8)}} className="font-bold text-violet-500">Войти</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            </View>
        </View>
        </CustomKeyboardView>
    );
}