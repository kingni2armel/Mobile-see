import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import identitie from  '../../assets/images/identite.png'



export default function LevelFourScreen() {

  return (    
            <View style={styles.slidecontainer}>
                <View style={styles.slide2}>
                <Text style={styles.titleHeader}>Proposer un trajet </Text>
                <Text style={styles.TrajetTitle}>Documents</Text>
                <Text style={styles.levelStepTitele}>Step 4 of 6</Text>
                </View>
                <View style={styles.parent}>
                    <View style={styles.parentItem}>
                        <View style={styles.FirstConteiner}>
                            <AntDesign
                                    name="exclamationcircle"
                                    size={15}
                                    style={styles.Icon}
                            />
                            <Text style={styles.textAstuce}>Astuces</Text>
                        </View>
                            <Text style={styles.DescriptionAstuce}>
                                Veuillez nous envoyer votre pièce d’identité pour vérification. 
                                Un profil dont l’identité est vérifiée est plus rassurant 
                                pour Conclure une transaction. En aucun, cas ces informations 
                                ne Seront partagées avec les autres utilisateurs.
                            </Text>
                    </View>
                    <View style={styles.ContainerInput}>
                            <Image source={identitie} style={styles.Image} resizeMode='contain' />  
                            <Text style={styles.TextNonverifie}>Non vérifié</Text>
                    </View>
                    <View style={styles.parentItem}>
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
                </View>
            </View>

  );
}

