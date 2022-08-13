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
import { RadioButton } from 'react-native-paper';


export default function ContactScreen() {
        const [checked, setChecked] = React.useState('first');
        const [count, setCount] = useState(0);
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
                                                <Image source={cameroun} style={styles.Image2} resizeMode='contain'/>
                                        </Text>
                                </View>
                                </View>
                        </View>
                        <View style={styles.ContainerHeaderItem}>
                                <Text style={styles.TextFirst}>Arrivée</Text>
                                <Text style={styles.date}>16 JUIL 2022</Text>
                        </View>
                        </View>
                        <View style={styles.Info}>
                              <AntDesign
                                        name="exclamationcircle"
                                        size={15}
                                        style={styles.Icon}
                                />
                                <Text style={styles.TextInfo}>Info</Text>
                        </View>
                        <View>
                                <Text style={styles.Description}>Pour ce voyage Laurence n’emporte que les colis ci-dessous.</Text>
                        </View>
                        <View>
                                <Text style={styles.TextSelection}>
                                        Sélectionnez les catégories d’articles que vous souhaitez envoyer
                                </Text>
                        </View>
                        <View style={styles.containerItem}>
                                 {/* bloc a renvoyer plusieurs fois  */}
                          <View style={styles.ContainerElementItem}>
                                        {/* <RadioButton
                                                status={ checked === 'first' ? 'unchecked' :'checked' }
                                                onPress={() => setChecked('first')}

                                                style={styles.Radius2}
                                                size={2}
                                        /> */}
                                        <Text style={styles.TextElement}>Vêtements/Chaussures</Text>
                           </View>
                           <View style={styles.ContainerElementItem}>
                                        {/* <RadioButton
                                                status={ checked === 'first' ? 'unchecked' :'checked' }
                                                onPress={() => setChecked('first')}

                                                style={styles.Radius2}
                                                size={2}
                                        /> */}
                                        <Text style={styles.TextElement}>Nourriture</Text>
                            </View>
                            <View style={styles.ContainerElementItem}>
                                        {/* <RadioButton
                                                style={styles.Radius2}
                                                size={2}
                                        /> */}
                                        <Text style={styles.TextElement}>Vêtements/Chaussures</Text>
                             </View>                
                        </View>       
                        <View style={styles.Info2}>
                                <AntDesign
                                        name="exclamationcircle"
                                        size={15}
                                        style={styles.Icon}
                                />
                                 <Text style={styles.TextInfo}>Info :</Text>
                        </View>
                        <View>
                                <Text style={styles.Description}>Laurence a encore 69kg disponible dans ses valises.</Text>
                        </View>
                        <View >
                                <Text style={styles.TextSouhait}>Combien de kg souhaitez -vous réserver ?</Text>
                        </View>
                        <View style={styles.ParentContainerButton}>
                                <View style={styles.ContainerButton}>
                                        <AntDesign
                                                name='minus'
                                                style={styles.IconeSingne}
                                                size={25}
                                                onClick={() => setCount(count - 1)}
                                        />   
                                        <Text style={styles.TextButton}>{count}</Text>
                                        <AntDesign
                                                name='plus'
                                                style={styles.IconeSingne}
                                                size={25}
                                                onClick={() => setCount(count + 1)}
                                        />
                                </View>
                        </View>
                        <View style={styles.ParentTextButton}>
                                <Text style={styles.TextSouhait}>
                                        Le prix estimé de cette transaction est de :
                                </Text>
                                <View style={styles.containerText}>
                                        <Text style={styles.Prix} >80,00$</Text>
                                        <Text style={styles.TextSouhaits}> á raison</Text>
                                        <Text style={styles.Prix} >10,00$/kg</Text>
                                </View>
                        </View>
                        <View style={styles.ContainerButton2}>
                                <TouchableOpacity 
                                        style={styles.Button2}    
                                >
                                        <Text style={styles.TextButton2}>Envoyer</Text>                                 
                                </TouchableOpacity>
                        </View>
                               
                   </View>             
               </ScrollView>
</View>
  );
}

