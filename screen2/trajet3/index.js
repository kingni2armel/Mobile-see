import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import Swiper from 'react-native-swiper/src';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';
import chaussure from  '../../assets/images/chaussure.png'
import document from  '../../assets/images/document.png'
import bijoux from  '../../assets/images/bijoux.png'
import cosmetique from  '../../assets/images/cosmetique.png'
import nourriture from  '../../assets/images/nourriture.png'
import appareil from  '../../assets/images/appareil.png'


export default function LevelTreeScreen() {

  return (    
            <View style={styles.slide2}>
                <View>
                    <Text style={styles.titleHeader}>Proposer un trajet </Text>
                    <Text style={styles.TrajetTitle}>Quel est le type de colis ?</Text>
                    <Text style={styles.TextDescription}>Sélectionnez les catégories d’articles que vous acceptez</Text>
                    <Text style={styles.levelStepTitele}>Step 3 of 6</Text>
                </View>

            <View style={styles.ContainerImage}>
                        <View style={styles.ContainerImageItem}>
                            <Image source={document} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Documents</Text>
                        </View>
                        <View style={styles.ContainerImageItem}>
                            <Image source={chaussure} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Vêtements/ Chaussures</Text>
                        </View>
            </View>


            <View style={styles.ContainerImage}>
                        <View style={styles.ContainerImageItem}>
                            <Image source={nourriture} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Nourritures</Text>
                        </View>
                        <View style={styles.ContainerImageItem}>
                            <Image source={appareil} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Appareils </Text>
                            <Text style={styles.titleImage2}>électroniques</Text>

                        </View>
            </View>


            <View style={styles.ContainerImage}>
                        <View style={styles.ContainerImageItem}>
                            <Image source={bijoux} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Bijoux</Text>
                        </View>
                        <View style={styles.ContainerImageItem}>
                            <Image source={cosmetique} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.titleImage}>Produits </Text>
                            <Text style={styles.titleImage2}>Cosmétiques</Text>

                        </View>
            </View>
            <View style={styles.Containercheckbox}>
                    <View> 
                        <CheckBox
                            style={styles.CheckBox}
                    /> 
                    </View>
                    <View>
                        <Text style={styles.TextCheck}>Appliquez cette sélection à mes futures Annonces</Text>

                    </View>
            </View>

            <View   style={styles.containerBtn}>
                    <View style={styles.containerBtnItem} >
                            <TouchableOpacity 
                                style={styles.btn1}
                            >
                                    <Text style={styles.textbtn1}>Préc</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.containerBtnItem}>
                            <TouchableOpacity
                                    style={styles.btn2}
                            >
                                    <Text style={styles.textbtn2}>Suiv</Text>
                            </TouchableOpacity>
                    </View>
            </View>
        </View>

  );
}

