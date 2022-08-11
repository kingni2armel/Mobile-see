import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { styles } from './style';
import france from  '../../assets/images/france.png'
import cameroun from  '../../assets/images/cameroun.png'
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function AccountScreen({navigation}) {
  return (
        <View style={styles.Container}>
            <View style={styles.ContainerItem}>
                <View style={styles.DataItem}>
                    <View style={styles.DataItemchild}>
                        < Image source={cameroun} style={styles.Image2} resizeMode='contain' />
                        <Text style={styles.textName}>Jameson Dunn</Text>
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
                          </View>
                          <Text style={styles.TextCerifie}>@certifié</Text>
                      </View>
                      <View style={styles.DataItemchild2}>
                            <Ionicons
                                name='menu-outline'
                                size={24}
                                style={styles.IconSidebar}
                                onPress={()=>navigation.navigate('Edit')}

                            />
                      </View>
                </View>
                <View style={styles.ParentContainerSecond}>
                      <View style={styles.ContainerSecond}>
                          <Text style={styles.TextIndication}>Langue :</Text>
                          <Image
                            source={france}
                            style={styles.ImageLangue}
                          />
                       </View>
                </View>
                <View style={styles.ParentContainerSecond}>
                      <View style={styles.ContainerSecond2}>
                          <Text style={styles.TextIndication}>Thème : Sombre</Text>
                          <View style={styles.ContainerRadius}><RadioButton/></View>
                       </View>
                </View>
                <View style={styles.Line}></View>
                <View style={styles.COntainerDash}>
                      <View style={styles.Dash}>
                            <MaterialIcons
                                name='important-devices'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text style={styles.TextDash}>Demandes reçues</Text>
                      </View>
                      <View style={styles.Dash}>
                            <MaterialIcons
                                name='notifications'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text 
                                style={styles.TextDash}
                                onPress={()=>navigation.navigate('Alert')}
                            >
                                Alertes
                            </Text>
                      </View>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='md-airplane-sharp'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text style={styles.TextDash}>Annonces de voyages</Text>
                      </View>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='ios-locate'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text style={styles.TextDash}>Tracking order</Text>
                      </View>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='checkmark-circle-sharp'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text style={styles.TextDash}>Verifications</Text>
                      </View>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='settings-sharp'
                                size={20}
                                style={styles.IconDash}
                            />
                            <Text
                                 style={styles.TextDash}
                                 onPress={()=>navigation.navigate('Preference')}
                            >
                                    Preferences
                            </Text>
                      </View>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='ios-help-circle'
                                size={20}
                                style={styles.IconDash}                        
                            />
                            <Text 
                                    style={styles.TextDash}
                                    onPress={()=>navigation.navigate('Aide')}
                            >
                                Centre d’aide
                            </Text>
                      </View>
                </View>
                <View style={styles.Line}></View>

                <View style={styles.COntainerDash}>
                      <View style={styles.Dash}>
                            <Ionicons
                                name='log-in-outline'
                                size={24}
                                style={styles.IconDash}
                            />
                            <Text style={styles.TextDash}>Déconnexion</Text>
                      </View>
                </View>

            </View>
        </View>
  );
}

