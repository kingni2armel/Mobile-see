import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SegmentedControl from 'rn-segmented-control';
import DateCompent from '../../../Component/Date';
import SegmentedControle from '../../../Component/SegmentedControl';

export default function CreateAlertScreen({navigation}) 
{
  const [tabIndex, setTabIndex] = React.useState(0)
  return (    
              <View style={styles.Container} >
                
                    <ScrollView style={styles.slide1}>
                             <View style={styles.ParentItemFirst}>
                                   <Text
                                      onPress={()=>navigation.navigate('Alert')}
                                      style={styles.TextAnnuler}
                                    >
                                      Annuler
                                    </Text>
                              </View>
                          <Text style={styles.TrajetTitle}>Créer une alerte</Text>
                          <View style={styles.ContainerSegment}>
                                      <Text>Rechercher par</Text>
                                        <SegmentedControl
                                                containerMargin={16}
                                                segments={['Villes ', 'Pays']}
                                                onChange={(index) => setTabIndex(index)}
                                                currentIndex={tabIndex}
                                                segmentedControlWrapper={styles.segmentedControlWrapper}
                                        />
                            </View>
                          <View style={styles.containerTextInput}>          
                                <View style={styles.containerItem}>
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
                                <View style={styles.containerItem}>
                                        <DateCompent
                                            text="Date de départ "
                                        />
                                </View>
                                  <View style={styles.containerItem}>
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
                                <View style={styles.containerItem}>
                                    <DateCompent
                                      text="Date d'arrivée "
                                    />          
                                </View>
                                <View style={styles.containerItem}>
                                    <DateCompent 
                                        text="Au plus tard le"
                                    />
                                </View>
                                <View style={styles.ContainerButton}>
                                        <TouchableOpacity style={styles.btnButton}>
                                                <Text style={styles.Textbtn}>Enregistrer</Text>
                                        </TouchableOpacity>
                                </View>
                          </View>
                    </ScrollView>                  
              </View>

  );
}

