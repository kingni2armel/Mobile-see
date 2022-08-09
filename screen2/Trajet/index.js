import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import Swiper from 'react-native-swiper/src';
import { colors } from "../../styles";
import { CheckBox } from 'react-native-elements'
import LevelTreeScreen from '../trajet3';
import LeveloneScreen from '../Trajet1';
import LeveltwoScreen from '../Trajet2';
import LevelFourScreen from '../Trajet4';
import LevelFiveScreen from '../Trajet5';


export default function TrajetScreen() {
  const [checked, setChecked] = React.useState(false);

  return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper} 
                showsButtons={false}
                activeDotColor={colors.PRIMARY}
                dotColor={colors.ORANGE}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
            >
              <View style={styles.slide1}>
                    <ScrollView>
                        <LeveloneScreen/>
                    </ScrollView>    
              </View>      
              <View style={styles.slide1}>
                  <ScrollView>
                      <LeveltwoScreen/>
                  </ScrollView>
              </View>
              <View style={styles.slide1}>
                 <ScrollView>
                      <LevelTreeScreen/>
                  </ScrollView>
              </View>   
              <View style={styles.slide1}>
                  <ScrollView style={styles.TSS}>
                      <LevelFourScreen/>
                  </ScrollView>
               </View>
               <View style={styles.slide1}>
                  <ScrollView style={styles.TSS}>
                      <LevelFiveScreen/>
                  </ScrollView>
               </View>


                 
          </Swiper>
    </View>
  );
}

