import React, { Component } from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import { Picker } from "@react-native-picker/picker";
import CountryPicker, { getCallingCode } from 'react-native-country-picker-modal'
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';
import { CheckBox } from 'react-native-elements'
import slide1 from  '../../assets/images/slide1.png'
import slide2 from  '../../assets/images/slide2.png'
import slide3 from  '../../assets/images/slide3.png'
import { colors } from '../../styles';
import { styles } from './style';

function WelcomeScreen({navigation}) {
    return ( 
            <View style = {styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false}
                    activeDotColor={colors.PRIMARY}
                    dotColor={colors.ORANGE}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                 
                >
                    <View style={styles.slide1}>
                        <View style={styles.slideTop}>
                            <Image source={slide1} style={styles.ImageSlide1} />  
                            <Text style={styles.textSlide1}>Rentabilisez votre voyage</Text>
                            <Text style={styles.text2slide1}>
                                 Rien de mieux que de gagner
                                 de l’argent En faisant ses chemins habituels
                            </Text>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <View style={styles.slideTop}>
                            <Image source={slide2} style={styles.ImageSlide2} />  
                            <Text style={styles.textSlide1}>Gratuite et sécurisée</Text>
                            <Text style={styles.text2slide2}>
                                Aucun coût supplémentaire à part les frais demandés par le transporteur,
                                Avec une grande assurance que vos Colis arrivent à destinations
                            </Text>
                        </View>
                    </View>
                  
                    <View style={styles.slide3}>
                        <View style={styles.slideTop}>
                            <Image source={slide3} style={styles.ImageSlide3} />  
                            <Text style={styles.textSlide3}>Welcome to TAKE N’ GO</Text>
                            <Text style={styles.text2slide2}>
                                 Delivery your package around the world without hesitation
                            </Text>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate('Home')}
                                style={styles.btnStart}
                            >
                                    <Text style={styles.textStart}>Start</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Swiper>   
            </View> 
        );
}
export default WelcomeScreen;