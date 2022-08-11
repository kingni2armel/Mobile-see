import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { colors } from "../../../styles";
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ordinateur from  '../../../assets/images/ordinateur2.png'
import { RadioButton } from 'react-native-paper';
import ButtonCreateAlert from '../../../Component/Alert';


export default function HomeScreenAlert({navigation}) {
  return (
         <View style={styles.ContainerParent}>
               <ScrollView >
                       <View style={styles.Parent}>
                            
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
                                        Si vous souhaitez être informé d’un voyage particulier sans 
                                        Avoir à ouvrir l’application,
                                        les alertes sont faites pour vous.
                                   </Text>
                             </View>
                             <View style={styles.containerButton}>
                                        <ButtonCreateAlert
                                                onPress={()=>navigation.navigate('Create')}
                                        />
                             </View>
                             
                             <View style={styles.ContainerImage}>
                                    <Image
                                        source={ordinateur}
                                        style={styles.ImageAlert}
                                        resizeMode='contain'
                                        
                                    />
                             </View>

                             <View style={styles.ContainerTextNoAlert}>
                                <Text 
                                        style={styles.textAlert}
                                        onPress={()=>navigation.navigate('Liste')}
                                >
                                 Aucune alerte trouvée
                                </Text>
                                <Text style={styles.TextNoConfiguration}>Vous n’avez pas encore configuré d’alerte de voyage</Text>
                             </View>
                       </View>
                        
             </ScrollView>
        </View>
  );
}

