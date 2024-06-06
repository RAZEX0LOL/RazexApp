import {View, Text,Image,Pressable, Alert} from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";


export default function SignIn(){
    const router=useRouter();
    const [loading,setLoading]=useState(false);

    const emailRef=useRef("");

    const passwordRef=useRef("");

    const handleLogin =async()=>{
        if(!emailRef.current || !passwordRef.current){
            Alert.alert("Вход","Пожалуйста заполните все поля");
            return;
        }


    }

    return(
        <CustomKeyboardView>
            <StatusBar style="dark"/>
            <View style={{paddingTop: hp(8),paddingHorizontal:wp(5)}} className="flex-1 gap-12">
                <View className="items-center">
                    <Image style={{height:hp(25)}} resizeMode="contain" source={require('../assets/images/login.png')}/>
                </View>



                <View className="gap-10">
                    <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neutral-800" >Вход</Text>
                    <View className="gap-4">
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
                        <View className="gap-3">
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
                            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-right text-neutral-600">Забыли пароль?</Text>
                        </View>

                        <View>
                            {
                                loading?(
                                        <View className="flex-row justify-center">
                                            <Loading size={hp(6.5)}/>
                                        </View>
                                ):(
                                    <TouchableOpacity onPress={handleLogin} style={{height: 50, backgroundColor: '#c4b5fd', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                                            Войти
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>

                        


                        <View className="flex-row justify-center">
                            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-600">Нет аккаунта? </Text>
                            <Pressable onPress={()=>router.push('signUp')}>
                                <Text style={{fontSize:hp(1.8)}} className="font-bold text-violet-500">Зарегистрироваться</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            </View>
        </CustomKeyboardView>
    );
}