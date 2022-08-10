import React, { Component,useState} from 'react';
import { View, Text,Image,TextInput,ScrollView,SafeAreaView,TouchableOpacity,Button, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from 'react-native-elements'
import CountryPicker, { getCallingCode } from 'react-native-country-picker-modal'
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';
import DocumentPicker from 'react-native-document-picker';
import { colors } from '../../../styles';
import { styles } from './style';
import drake from  '../../../assets/images/drake.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import SelectDropdown from 'react-native-select-dropdown'

function UpdateProfilScreen({navigation}) {
        const [checked, setChecked] = React.useState(false);
        const [country, setCountry] = React.useState('Unknown');
        const [countryCode,setCountryCode] =  useState('IN');
        const [callingCode, SetcallingCode] = useState('91')
        const [selectedCallingCode, setSelectedCallingCode] = useState('');
        const [singleFile, setSingleFile] = useState(null);
        const gender = ["Homme", "Femme",]



        const selectFile = async () => {
                try {
                  const res = await DocumentPicker.pick({
                
                    type: [DocumentPicker.types.allFiles],
                   
                  });
                  console.log('res : ' + JSON.stringify(res));
                  setSingleFile(res);
                } catch (err) {
                  setSingleFile(null);
                  if (DocumentPicker.isCancel(err)) {
                    alert('Canceled');
                  } else {
                    alert('Unknown Error: ' + JSON.stringify(err));
                    throw err;
                  }
                }
              };
    return ( 
        
                <ScrollView>
                        <View style = {styles.container}>
                                <View style={styles.slide1}>
                                        <View style={styles.slideTop}>
                                                <View style={styles.TitleSingup}>
                                                        <Image 
                                                                source={drake}
                                                                style={styles.Image}
                                                        />
                                                        <AntDesign
                                                                name="edit"
                                                                size={25}
                                                                style={styles.IconEdit}

                                                        />
                                                </View>
                                        
                                                <Text style={styles.textInput}>Username</Text>
                                                <View style={styles.ContainerItem}>
                                                        <Ionicons
                                                                name="person-sharp"
                                                                size={30}
                                                                style={styles.Icon}

                                                        />
                                                        <TextInput
                                                                placeholder='John Williams'
                                                                style={styles.TextInput}
                                                        />
                                                
                                                </View>
                                                <Text style={styles.textInput}>Email</Text>
                                                <View style={styles.ContainerItem}>
                                                        <Ionicons
                                                                name="mail-sharp"
                                                                size={30}
                                                                style={styles.Icon}

                                                        />
                                                        <TextInput
                                                                placeholder='John.william@gmail.com'
                                                                style={styles.TextInput}
                                                        />
                                                
                                                </View>
                                                <Text style={styles.textInput}>Date de Naissance</Text>
                                                <View style={styles.ContainerItem3}>
                                                        <View style={styles.ItemDate}>
                                                        </View>
                                                        <View style={styles.ItemDate}>
                                                        </View>
                                                        <View style={styles.ItemDate}>
                                                        </View>
                                                </View>
                                                <Text style={styles.textInput}>Genre</Text>
                                                <View style={styles.ContainerItem}>
                                                        <Ionicons
                                                                name="male-sharp"
                                                                size={30}
                                                                style={styles.Icon}

                                                        />
                                                      <SelectDropdown
                                                                selectedRowStyle={styles.Dropdown}
                                                                data={gender}
                                                                onSelect={(selectedItem, index) => {
                                                                        console.log(selectedItem, index)
                                                                }}
                                                                buttonTextAfterSelection={(selectedItem, index) => {
                
                                                                        return selectedItem
                                                                }}
                                                                rowTextForSelection={(item, index) => {
            
                                                                        return item
                                                                }}
                                                        />                                      
                                                </View>

                                                <Text style={styles.textInput}>Telephone</Text>
                                                <View style={styles.ContainerItem}>
                                                        <CallingCodePicker
                                                                style={styles.countryPicker} 
                                                                onValueChange={callingCode => setSelectedCallingCode(callingCode)}
                                                        />
                                                
                                                </View>
                                                <Text style={styles.textInput}>Nationalité</Text>
                                                <View style={styles.ContainerItem}>
                                                        <View style={styles.Itemcountry}>
                                                                <CountryPicker 
                                                                        style={styles.countryPicker}
                                                                        withFilter
                                                                        countryCode={countryCode}
                                                                        withFlag
                                                                        withAlphaFilter={false}
                                                                        withCurrencyButton={false}
                                                                        onSelect={country=>{
                                                                        console.log('country',country)
                                                                        const {cca2,callingCode} = country;
                                                                        setCountryCode(cca2)
                                                                        SetcallingCode(callingCode[0])
                                                                                        
                                                                        }}
                                                                />
                                                        </View>
                                                </View>
                                                <View style={styles.ContainerItem2}>
                                                        <TouchableOpacity>
                                                                <Text style={styles.TextButton}>Update</Text>  
                                                        </TouchableOpacity>        
                                                </View>
                                        </View> 
                                </View>   
                        </View> 
                </ScrollView>
        );
}
export default UpdateProfilScreen;
