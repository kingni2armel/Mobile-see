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



export default function LevelTwoScreen() {

  return (    
            <View style={styles.slide1}>
            
                
                        <View>
                            <Text style={styles.titleHeader}>Proposer un trajet </Text>
                            <Text style={styles.TrajetTitle}>Type de service</Text>
                            <Text style={styles.levelStepTitele}>Step 2 of 6</Text>
                        </View>
                        <TouchableOpacity style={styles.Levelstep}></TouchableOpacity>
                        <View style={styles.containerTextInput}>
                            <View style={styles.Parent}>
                                < Text style={styles.LabelText}>Nombre de kilos à vendre</Text>
                                <View style={styles.containerFlexInput}>
                                        <TextInput
                                            style={styles.TextInputstyleItem}
                                            placeholder='23'
                                        />
                                        <Text style={styles.Textlb}>lb</Text>
                                        <View style={styles.designCOlor}>
                                            <Text style={styles.Textitem}>kg</Text>
                                        </View>

                                </View> 
                                
                            </View>  
                            <View style={styles.Parent}>
                                < Text style={styles.LabelText}>Prix d'un kilo en Euro</Text>
                                <View style={styles.containerFlexInput}>
                                        <TextInput
                                            style={styles.TextInputstyleItem}
                                            placeholder='23'
                                        />
                                        <Text style={styles.Textlb}>lb</Text>
                                        <View style={styles.designCOlor}>
                                            <Text style={styles.Textitem}>€</Text>
                                        </View>

                                </View> 
                                
                            </View>  
                            <View style={styles.Parent}>
                                < Text style={styles.LabelText}>Prix d'un document en Euro</Text>
                                <View style={styles.containerFlexInput}>
                                        <TextInput
                                            style={styles.TextInputstyleItem}
                                            placeholder='23'
                                        />
                                        <Text style={styles.Textlb}>lb</Text>
                                        <View style={styles.designCOlor}>
                                            <Text style={styles.Textitem}>€</Text>
                                        </View>

                                </View> 
                                
                            </View>    
                            <View style={styles.Parent}>
                                < Text style={styles.LabelText}>Répartition des kilos</Text>
                                <View style={styles.containerFlexInput2}>
                                        <AntDesign
                                            name='shoppingcart'
                                            size={20}
                                            style={styles.Icon2}
                                        />
                
                                        <Text style={styles.Textlb2}>Je peux détailler la totalité mes kilos disponibles.</Text>
                                        

                                </View> 
                                <View style={styles.containerFlexInput2}>
                                    <RadioButton
        
                                    />
                                    <Text style={styles.Textlb2}>J’offre la totalité de mes kilos à un seul client.</Text>

                                </View> 
                                
                            </View>    
                            <View style={styles.Parent}>
                                < Text style={styles.LabelText}>Répartition des kilos</Text>
                     
                                <View style={styles.containerFlexInput2}>
                                    <RadioButton
                                        style={styles.Radius2}
                                    />
                                    <Text style={styles.Textlb2}>Définir avec un client.</Text>
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
            </View>

  );
}

