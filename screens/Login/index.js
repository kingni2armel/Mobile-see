import React, { Component, useState } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import { styles } from './style';
import login from '../../assets/images/login.png';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios";

function LoginScreen({navigation}) {
    const [email,Setemail] = useState()
    const [password,Setpassword] = useState()
    const Sing =  async(e)=>{
            const data = {email,password}
            const response =  await axios.post("https://apislabtech.slabtech.dev/api/singin",data)
            console.log(response)
    }
    return ( 
            <View style = {styles.container}>
                <View style={styles.ContainerImage}>
                    <Image source={login} style={styles.login} /> 
                    <TextInput
                        name={email}
                        value={email}
                        placeholder= 'email' 
                        style={styles.InputStyle}
                        onChange={(e)=>Setemail(e.target.value)}                           
                    />
                    <TextInput 
                        name={password}
                        value={password}
                        placeholder='password'
                        onChange={(e)=>Setpassword(e.target.value)}                           
                        style={styles.InputStyle}
                    />
                     <TouchableOpacity 
                        onPress={Sing}
                        style={styles.btnConnect}>
                        <Text style={styles.textConnect}>Login</Text>
                     </TouchableOpacity>
                 <View style={styles.containerText}>
                    <View>
                        <Text>Don’t have an account ? </Text>
                    </View>
                    <View>
                        <Text 
                            onPress={()=>navigation.navigate('Register')}
                                style={styles.TestSingup}> Sign Up </Text>
                    </View>
                 </View>
                </View>
                <View style={styles.containerIcon}>
                    <View style={styles.containerIconItem}>
                        <Ionicons name="logo-facebook" style={styles.Icon1}/>
                    </View>
                    <View style={styles.containerIconItem}>
                        <Ionicons name="logo-twitter" style={styles.Icon2}/>
                    </View>
                    <View style={styles.containerIconItem}>
                        <Ionicons name="md-mail" style={styles.Icon3}/>
                    </View>
                </View>

                <View style={styles.containerCopiright}>
                        <Text style={styles.copiright}>Copyright(c)ekosmartafrica 2022</Text>
                </View>

            </View>     
        );
}

export default LoginScreen;