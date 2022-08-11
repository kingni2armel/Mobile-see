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
import component from  '../../assets/images/component.png'
import cameroun from  '../../assets/images/cameroun.png'
import france from  '../../assets/images/france.png'
import { RadioButton } from 'react-native-paper';
import SegmentedControl from 'rn-segmented-control';




export default function AnnonceScreen() {
        const [tabIndex, setTabIndex] = React.useState(0);

  return (
         <View style={styles.ContainerParent}>
               <ScrollView >
                        <View style={styles.slidecontainer}>

                                <View style={styles.ContainerSegment}>
                                        <SegmentedControl
                                                containerMargin={16}
                                                segments={['Annonces de voyages ', 'Reservations de colis']}
                                                onChange={(index) => setTabIndex(index)}
                                                currentIndex={tabIndex}
                                                segmentedControlWrapper={styles.segmentedControlWrapper}
                                        />
                                </View>
                        </View>
                       
                        <View style={styles.ContainerHeader}>
                                {/* bloc a renvoyer plusieurs fois  */}
                                <View style={styles.ParentContainerHearderItem}>
                                        <View style={styles.ContainerHeaderItem}>
                                                <Text style={styles.TextFirst}>Départ</Text>
                                                <View><Image source={component} style={styles.componentImage} resizeMode='contain' /></View>
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
                                
                        </View>    

        </ScrollView>
</View>
  );
}

