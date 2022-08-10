import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ordinateur from  '../../assets/images/ordinateur.png'
import { RadioButton } from 'react-native-paper';


export default function AideScreen() {
  return (
         <View style={styles.ContainerParent}>
               <ScrollView >
                       <View style={styles.Parent}>
                              <View style={styles.ParentItemFirst}>
                                   <Text style={styles.TextAnnuler}>Annuler</Text>
                              </View>
                              <View style={styles.ParentItemSecond}>
                                        <Text style={styles.TextcentreAide}>Centre d’aide</Text>
                              </View>
                              <View style={styles.FirstConteiner}>
                                        <AntDesign
                                                name="exclamationcircle"
                                                size={15}
                                                style={styles.Icon}
                                        />
                                        <Text style={styles.textAstuce}>Info</Text>
                             </View>

                             <View style={styles.ContainerTextDescription}>
                                   <Text style={styles.TextDescription} >
                                        Bienvenue au centre d’aide, si vous avez le moindre problème,
                                        Veuillez le signaler via le moyen de communication qui
                                        vous Convient le mieux. PS: nous vous assistons le plus 
                                        rapidement possible.
                                   </Text>
                             </View>
                             <View style={styles.ContaineAide}>
                                <Ionicons
                                        name='ios-logo-whatsapp'
                                        style={styles.IoniconsIcon1}
                                /> 
                                <Text style={styles.textContacter}>Contactez nous par Whatsapp</Text>
                             </View>
                             <View style={styles.ContaineAide}>
                                <Ionicons
                                        name='mail-sharp'
                                        style={styles.IoniconsIcon2Item}
                                /> 
                                <Text style={styles.textContacter}>Contactez nous par Mail</Text>
                             </View>
                             
                             <View style={styles.ContainerImage}>
                                    <Image
                                        source={ordinateur}
                                        style={styles.ImageHelp}
                                        resizeMode='contain'
                                        
                                    />
                             </View>
                             <View style={styles.FirstConteiner}>
                                        <AntDesign
                                                name="exclamationcircle"
                                                size={15}
                                                style={styles.Icon}
                                        />
                                        <Text style={styles.textAstuce}>Tutoriels</Text>
                             </View>
                             <View style={styles.ContainerTextDescription}>
                                   <Text style={styles.TextDescription} >
                                        Consulter nos tutoriels ci-dessous 
                                        pour mieux comprendre 
                                        le fonctionnement notre plateforme.
                                   </Text>
                             </View>

                             <View style={styles.ContainerTutoriel}>
                                <Ionicons
        
                                        style={styles.IoniconsIcon1}
                                /> 
                                <Text style={styles.textContacter}>Voir les tutoriels de TAKE N GO</Text>
                             </View>
                             <View style={styles.ContainerIcon}>
                                        <View style={styles.ContainerIconItem}>
                                                <Text style={styles.TextSuiveznous}>Suivez-nous sur:</Text>
                                        </View>
                                        <View style={styles.ContainerIconItemIcon}>
        
                                                <View style={styles.IconItem1}>
                                                        <FontAwesome
                                                            name='facebook-f'
                                                            style={styles.IoniconsIcon2}
                                                        />
                                                </View>
                                                <View style={styles.IconItem2}>
                                                        <FontAwesome
                                                            name='twitter'
                                                            style={styles.IoniconsIcon3}
                                                        />
                                                </View>
                                                <View style={styles.IconItem3}>
                                                        <FontAwesome
                                                            name='instagram'
                                                            style={styles.IoniconsIcon4}
                                                        />
                                                </View>
                                            
                                        </View>
                                </View>

                      
                      
                      
                         
                       </View>
                        
             </ScrollView>
        </View>
  );
}

