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
import airplane from  '../../assets/images/airplane.png'
import cameroun from  '../../assets/images/cameroun.png'
import france from  '../../assets/images/france.png'

export default function ChatScreen({navigation}) {
  return (
         <View style={styles.ContainerParent}>
               <ScrollView >
                        <View style={styles.slidecontainer}>
                                <View style={styles.ContainerHeader}>
                                        <View style={styles.ContainerHeaderItem}>
                                                <Text style={styles.TextFirst}>Départ</Text>
                                                <Text style={styles.date}>15 JUIL 2022</Text>
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
                                        </View>
                                        <View style={styles.ContainerHeaderItem}>
                                                <Text style={styles.TextFirst}>Arrivée</Text>
                                                <Text style={styles.date}>16 JUIL 2022</Text>
                                        </View>
                                </View>
                                <View style={styles.Parent}>
                                        <View style={styles.Container}>
                                        <View style={styles.children}> <Text style={styles.TextChildren1}>Nombre de kilos</Text></View>
                                                <View style={styles.children2}> 
                                                        <View style={styles.Parentchild}>
                                                                <View style={styles.Item}><Text style={styles.TextChildren2}>69</Text></View>
                                                                <View style={styles.Item}>
                                                                        <Feather
                                                                                name='shopping-bag'
                                                                                size={20}
                                                                                style={styles.IconShop}
                                                                        />
                                                                </View>
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
                                                <View style={styles.children}> <Text style={styles.TextChildren1}>Prix par Document</Text></View>
                                                <View style={styles.children2}> 
                                                        <View style={styles.Parentchild}>
                                                                <View style={styles.Item}><Text style={styles.TextChildren2}>1,00 $</Text></View>
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
                                                                <View style={styles.Item}><Text style={styles.TextChildren2}>19 juin 2022</Text></View>
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
                                
                                </View>
                                
                                <View style={styles.ContainerIcon}>
                                        <View style={styles.ContainerIconItem}>
                                                <Text>Partager cette annonce sur :</Text>
                                        </View>
                                        <View style={styles.ContainerIconItem2}>
                                                <View style={styles.IconItem}>
                                                        <Ionicons
                                                           name='ios-logo-whatsapp'
                                                           style={styles.IoniconsIcon1}
                                                        />
                                                </View>
                                                <View style={styles.IconItem}>
                                                        <FontAwesome
                                                            name='facebook-f'
                                                            style={styles.IoniconsIcon2}
                                                        />
                                                </View>
                                                <View style={styles.IconItem}>
                                                        <FontAwesome
                                                            name='instagram'
                                                            style={styles.IoniconsIcon3}
                                                        />
                                                </View>
                                                <View style={styles.IconItem}>
                                                        <FontAwesome
                                                            name='twitter'
                                                            style={styles.IoniconsIcon4}
                                                        />
                                                </View>
                                            
                                        </View>
                                </View>


                        <View style={styles.UserInfo}>
                                <View style={styles.UserInfoItem}>
                                        <View style={styles.UserInfoContent}>
                                             <View style={styles.WRAP}>
                                                  <View>
                                                        <View style={styles.containerInformation}>
                                                                <View style={styles.UserInfoContent}>
                                                                        <Image source={cameroun} style={styles.Image} resizeMode='contain' />
                                                                </View>
                                                                <View style={styles.UserInfoContent}>
                                                                        <View style={styles.ContainerName}>
                                                                                 <Text style={styles.TextNom}>Laurence Kamga</Text>
                                                                                 <AntDesign
                                                                                        name='checkcircle'
                                                                                        style={styles.Iconecheckcircle}
                                                                                        size={15}
                                                                                 />
                                                                        </View>
                                                                        <View style={styles.ContainerIconAvis}>
                                                                                <FontAwesome5
                                                                                        name='star'
                                                                                        style={styles.IconAvis}
                                                                                />
                                                                                   <FontAwesome5
                                                                                        name='star'
                                                                                        style={styles.IconAvis}
                                                                                />
                                                                                   <FontAwesome5
                                                                                        name='star'
                                                                                        style={styles.IconAvis}
                                                                                />
                                                                                <Text>-</Text>
                                                                                <Text style={styles.TextAvis}>0 Avis</Text>
                                                                        </View>
                                                                        <Text style={styles.textCertifiee}>Utilisateur certifié</Text>

                                                                </View>
                                                        </View>
                                                  </View>
                                                  <View>
                                                        <AntDesign
                                                                name='right'
                                                                style={styles.Iconecheckcircle2}
                                                                size={25}
                                                        />
                                                  </View>
                                             </View>
                                        </View>
                                </View> 
                                <View style={styles.UserInfoItemBorder}>
                                </View>
                                <View style={styles.UserInfoItem}>
                                        <Text style={styles.TextCommentaire}>Pas de commentaire spécifique pour cette annonce !</Text>
                                </View>     

                        </View>
                        <View style={styles.ContainerButton}>
                                <TouchableOpacity style={styles.Button}
                                        onPress={()=>navigation.navigate('Contact')}
                                >
                                        <Text style={styles.TextButton}>Contacter Laurence</Text>
                                        <AntDesign
                                                name='message1'
                                                style={styles.IconeMessage}
                                                size={25}
                                        />
                                </TouchableOpacity>
                        </View>
                                
                </View>
        </ScrollView>
</View>
  );
}

