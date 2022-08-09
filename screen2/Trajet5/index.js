import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import airplane from  '../../assets/images/airplane.png'
import cameroun from  '../../assets/images/cameroun.png'
import france from  '../../assets/images/france.png'






export default function LevelFiveScreen() {

  return (    
            <View style={styles.slidecontainer}>
                <View style={styles.slide2}>
                        <Text style={styles.titleHeader}>Proposer un trajet </Text>
                        <Text style={styles.TrajetTitle}>Résumé</Text>
                        <Text style={styles.levelStepTitele}>Step 4 of 6</Text>
                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Moyen de transport</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Avion</Text></View>
                               <View style={styles.Item}><Image source={airplane} style={styles.Image} resizeMode='contain' /></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Départ</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Douala,Cameroun</Text></View>
                               <View style={styles.Item}><Image source={cameroun} style={styles.Image2} resizeMode='contain' /></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Date</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>18 juin 2022</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Arrivée</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Paris, France</Text></View>
                               <View style={styles.Item}><Image source={france} style={styles.Image2} resizeMode='contain' /></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Nombre de kilos</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>19 juin 2022</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Prix par Kg</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>5,00 $</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Moyens de paiement</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Définir avec le client</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Biens acceptés</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Vêtements/Documents</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Compagnie aérienne</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>Brussels airlines</Text></View>
                            </View>
                    </View>

                </View>
                <View style={styles.Container}>
                    <View style={styles.children}> <Text style={styles.TextChildren1}>Numéro du vol</Text></View>
                    <View style={styles.children2}> 
                            <View style={styles.Parentchild}>
                               <View style={styles.Item}><Text style={styles.TextChildren2}>0004790</Text></View>
                            </View>
                    </View>

                </View>

                <View style={styles.ContainerIcon}>
                        <View style={styles.IconItem}>
                                <Ionicons
                                    name='ios-arrow-undo-circle'
                                    style={styles.IoniconsIcon1}
                                />
                                <Text style={styles.TextIcon}>Recommencer</Text>
                        </View>
                        <View style={styles.IconItem}>
                                <Ionicons
                                    name='ios-close-circle'
                                    style={styles.IoniconsIcon2}
                                />
                                <Text style={styles.TextIcon2}>Annuler</Text>
                        </View>
                        <View style={styles.IconItem}>
                                <Ionicons
                                    name='checkmark-circle'
                                    style={styles.IoniconsIcon3}
                                />
                                <Text style={styles.TextIcon2}>Valider</Text>
                        </View>
                </View>
           
               
            </View>

  );
}

