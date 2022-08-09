import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import Swiper from 'react-native-swiper/src';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function LeveloneScreen() {

  return (    
              <View style={styles.slide1}>
                
                    <ScrollView>
                          <Text style={styles.titleHeader}>Proposer un trajet </Text>
                          <Text style={styles.TrajetTitle}>Quel est le Trajet</Text>
                          <Text style={styles.levelStepTitele}>Step 1 of 6</Text>
                          <TouchableOpacity style={styles.Levelstep}></TouchableOpacity>
                          <View style={styles.containerTextInput}>
                                <View style={styles.Parent}>
                                    < Text style={styles.LabelText}>Moyen de Transport</Text>
                                    <View style={styles.containerFlexInput}>
                                            <TextInput
                                                style={styles.TextInputstyleItem}
                                                placeholder='Avion'
                                            />
                                            <Ionicons
                                                name='airplane'
                                                size={25}
                                                style={styles.Icon}
                                            />
                                    </View> 
                                </View>           
                                <View>
                                    < Text style={styles.LabelText}>Ville de depart
                                      <Ionicons
                                            name='ios-location'
                                            size={20}
                                    
                                        />
                                    </Text>
                                      
                                      <TextInput
                                        style={styles.TextInputstyle}
                                        placeholder='Douala'

                                      />
                                </View>
                                <View>
                                    < Text style={styles.LabelText}>Date de départ </Text>
                                      
                                      <View style={styles.containerDatepicker}>
                                            <View style={styles.containerDatepickerItem}>
                                              <Text>Month</Text>
                                                <TextInput
                                                    style={styles.TextInputstyleDate}
                                                    placeholder='May' 
                                                />
                                            </View>
                                            <View  style={styles.containerDatepickerItem}>
                                              <Text>Day</Text>
                                                <TextInput
                                                    style={styles.TextInputstyleDate}
                                                    placeholder='17' 
                                                />
                                            </View>
                                            <View  style={styles.containerDatepickerItem}>
                                              <Text>Year</Text>
                                                <TextInput
                                                    style={styles.TextInputstyleDate}
                                                    placeholder='1991' 
                                                />
                                            </View>
                                      </View>
                                </View>
                                  <View>
                                    < Text style={styles.LabelText}>Ville d'arrivée
                                      <Ionicons
                                            name='ios-location'
                                            size={20}
                                        />
                                    </Text>
                                      
                                      <TextInput
                                        style={styles.TextInputstyle}
                                        placeholder='Douala'

                                      />
                                </View>
                                <View>
                                    <Text style={styles.LabelText}>Date de départ </Text>           
                                    <View style={styles.containerDatepicker}>
                                          <View style={styles.containerDatepickerItem}>
                                            <Text>Month</Text>
                                              <TextInput
                                                  style={styles.TextInputstyleDate}
                                                  placeholder='May' 
                                              />
                                          </View>
                                          <View  style={styles.containerDatepickerItem}>
                                            <Text>Day</Text>
                                              <TextInput
                                                  style={styles.TextInputstyleDate}
                                                  placeholder='17' 
                                              />
                                          </View>
                                          <View  style={styles.containerDatepickerItem}>
                                            <Text>Year</Text>
                                              <TextInput
                                                  style={styles.TextInputstyleDate}
                                                  placeholder='1991' 
                                              />
                                          </View>
                                    </View>
                                </View>
                                <View style={styles.ContainerButton}>
                                        <TouchableOpacity style={styles.btnButton}>
                                                <Text style={styles.Textbtn}>Suivant</Text>
                                        </TouchableOpacity>
                                </View>
                          </View>
                    </ScrollView>                  
              </View>

  );
}
