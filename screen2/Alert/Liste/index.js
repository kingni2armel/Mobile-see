import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonCreateAlert from '../../../Component/Alert';
import airplane from  '../../../assets/images/airplane.png'
import cameroun from  '../../../assets/images/cameroun.png'
import france from  '../../../assets/images/france.png'
import component from  '../../../assets/images/component.png'
import airplane2 from  '../../../assets/images/airplane2.png'


export default function ListeAlertScreen({navigation}) 
{
  const [tabIndex,setTabIndex] = React.useState(0)
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
                              <View style={styles.containerBtn}>
                                        <ButtonCreateAlert
                                              onPress={()=>navigation.navigate('Create')}
                                        />                         
                              </View>
                              <View>
                                     <Text style={styles.NombreTrajet}>Total: 2</Text>
                              </View>
                              <View style={styles.ContainerHeader}>
                              
                                <View style={styles.ParentContainerHearderItem}>
                                  {/* debut du bloc a renvoyer plusieurs fois  */}
                                        <View style={styles.ContainerHeaderItem2}>
                                                <View>
                                                    <View>
                                                        <Image source={component} style={styles.componentImage} resizeMode='contain' />
                                                    </View>
                                                    <View style={styles.containerCity}>
                                                            <View>
                                                                    <Text>PARIS (PAR) -</Text>
                                                                    <Text style={styles.pays}>
                                                                            France
                                                                            <Image source={france} style={styles.Image2} resizeMode='contain' />
                                                                    </Text>
                                                            </View>
                                                            <View>
                                                                    <Text>Douala (DLA) </Text>
                                                                    <Text style={styles.pays}>
                                                                            Cameroun
                                                                            <Image source={cameroun} style={styles.Image2} resizeMode='contain' />
                                                                    </Text>
                                                            </View>
                                                     </View>
                                                     <Text style={styles.TextDatePLustard}>Au plus tard le 27 juin 2022</Text>
                                                </View>
                                                <View style={styles.ContainerImageAirplane}>
                                                    <Image 
                                                        source={airplane2} 
                                                        resizeMode='contain'
                                                        style={styles.ImageAvion}
                                                    />
                                                    <View style={styles.ContainerStatut}>
                                                        <Text style={styles.TextStatut}>Activée</Text>
                                                        <Ionicons
                                                          name='notifications-outline'
                                                          size={15}
                                                        />
                                                    </View>
                                                </View>
                                         </View>
                                  {/* du bloc a renvoyer plusieurs fois  */}
                                       
                                </View>
                                
                             </View> 
                              
                    </ScrollView>                  
              </View>
  );
}

