import React, { Component,useState} from 'react';
import { View, Text,Image,TextInput,ScrollView,SafeAreaView,TouchableOpacity,Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';
import slide1 from  '../../assets/images/slide1.png'
import slide2 from  '../../assets/images/slide2.png'
import slide3 from  '../../assets/images/slide3.png'
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from 'react-native-elements'
import CountryPicker, { getCallingCode } from 'react-native-country-picker-modal'
import { CallingCodePicker } from '@digieggs/rn-country-code-picker';
import DocumentPicker from 'react-native-document-picker';
import { colors } from '../../styles';
import { styles } from './style';

function ResgisterScreen({navigation}) {
        const [checked, setChecked] = React.useState(false);
        const [country, setCountry] = React.useState('Unknown');
        const [countryCode,setCountryCode] =  useState('IN');
        const [callingCode, SetcallingCode] = useState('91')
        const [selectedCallingCode, setSelectedCallingCode] = useState('');
        const [singleFile, setSingleFile] = useState(null);


        const selectFile = async () => {
                // Opening Document Picker to select one file
                try {
                  const res = await DocumentPicker.pick({
                    // Provide which type of file you want user to pick
                    type: [DocumentPicker.types.allFiles],
                    // There can me more options as well
                    // DocumentPicker.types.allFiles
                    // DocumentPicker.types.images
                    // DocumentPicker.types.plainText
                    // DocumentPicker.types.audio
                    // DocumentPicker.types.pdf
                  });
                  // Printing the log realted to the file
                  console.log('res : ' + JSON.stringify(res));
                  // Setting the state to show single file attributes
                  setSingleFile(res);
                } catch (err) {
                  setSingleFile(null);
                  // Handling any exception (If any)
                  if (DocumentPicker.isCancel(err)) {
                    // If user canceled the document selection
                    alert('Canceled');
                  } else {
                    // For Unknown Error
                    alert('Unknown Error: ' + JSON.stringify(err));
                    throw err;
                  }
                }
              };
    return ( 
        
            <View style = {styles.container}>
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false}
                    activeDotColor={colors.PRIMARY}
                    dotColor={colors.ORANGE}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                 
                >
                    <View style={styles.slide1}>
                        <View style={styles.slideTop}>
                                <View style={styles.TitleSingup}>
                                      <Text style={styles.TextSingup}>Pour commencer ...</Text>
                                </View>
                                <Text style={styles.textInput}>Step 1 of 3</Text>
                                <TouchableOpacity style={styles.level1}>

                                </TouchableOpacity>
                                <Text style={styles.textInput}>Username</Text>
                               
                                <View>
                                        <TextInput
                                                style={styles.Input}
                                                placeholder='Username'
                                        />
                                </View>
                                <Text style={styles.textInput}>Gender</Text>
                                <View style={styles.containerParentCheckbox}>
                                        <View style={styles.containerCheckbox}>
                                                <View style={styles.containerCheckboxItem}>   
                                                        <CheckBox
                                                                style={styles.CheckBox}  
                                                                value={checked}
                                                                onValueChange={setChecked}    
                                                        />                    
                                                </View>
                                                <View style={styles.containerCheckboxItem}>
                                                        <Text style={styles.label}>Homme</Text>
                                                </View>
                                        </View>
                                        <View style={styles.containerCheckbox2}>
                                                <View style={styles.containerCheckboxItem}>   
                                                        <CheckBox
                                                            style={styles.CheckBox}
                                                        />                    
                                                </View>
                                                <View style={styles.containerCheckboxItem}>
                                                        <Text style={styles.label2}>Femme</Text>
                                                </View>
                                        </View>             
                                </View>
                                <Text style={styles.textInput}>Nationalité</Text>
                                <View style={styles.Allcountry}>              
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
                                <Text style={styles.textInput}>Email</Text>
                                <View>
                                        <TextInput
                                                placeholder= 'email' 
                                                style={styles.Input}
                                        />
                                </View>
                                <Text style={styles.textInput}>Telephone</Text>

                                <View style={styles.containerParentNumber}>
                                        <View style={styles.labelNumber}>              
                                                <CallingCodePicker 
                                                        onValueChange={callingCode => setSelectedCallingCode(callingCode)}
                                                />
                                        </View>
                                        <View >
                                                <TextInput
                                                        placeholder='Phone number'
                                                        style={styles.numberTextInput}
                                                />
                                        </View>
                                </View>
                                <Text style={styles.TextConfidentialite}>All of your information is confidential</Text>
                                <TouchableOpacity 
                                   style={styles.btnConnect}
                                >
                                        <Text style={styles.textConnect}>Continuer</Text>
                                </TouchableOpacity>

                                <View style={styles.containerText}>
                                        <View>
                                        <Text>Already have an account ? </Text>
                                        </View>
                                        <View>
                                        <Text 
                                                onPress={()=>navigation.navigate('Login')}
                                                style={styles.TestSingup}> Login </Text>
                                        </View>
                                 </View>
                              
                        </View> 
                             
                    </View>
                    <View style={styles.slide2}>
                        <View style={styles.slideTop}>
                               
                                <Text style={styles.TextSingup}>Document d’identité</Text>
                                <Text style={styles.textInput}>Step 2 of 3</Text>
                                <TouchableOpacity style={styles.level2}>

                                </TouchableOpacity>
                                <Text style={styles.TextDescription}>
                                        Nous nous engageons à offrir une expérience sure et securisée à 
                                        notre communauté. Dans certains cas, nous vous demandons de vérifier
                                        votre identité. Cela nous permet de confirmer que vous êtes bien la personne 
                                        que vous prétendez être, et
                                        que vous pouvez recevoir des paiements de notre plateforme
                                </Text>
                                <View>
                                        <TextInput
                                                style={styles.Input}
                                                placeholder='Carte d’identité'
                                        />
                                          <TextInput
                                                style={styles.Input}
                                                placeholder='Passeport'
                                        />
                                </View>
                                <View style={styles.ContainerPasser}>
                                        <View>
                                                <Text style={styles.textPasser}>Passer</Text>
                                        </View>
                                 
                                </View>

                                <View style={styles.ContainerBtnNext2}>
                                        <Text style={styles.TextConfidentialite}>All of your information is confidential</Text>
                                        <TouchableOpacity 
                                                style={styles.btnNext2}>
                                                <Text style={styles.textBtnNext2}>Continuer</Text>
                                        </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                  
                    <View style={styles.slide3}>
                        <View style={styles.slideTop}>
                            <Image 
                                source={slide3} 
                                style={styles.ImageSlide3}
                             />  
                            <Text style={styles.TextSingup}>Mot de passe</Text>
                            <Text style={styles.textInput}>Step 3 of 3</Text>
                            <TouchableOpacity style={styles.level3}>

                            </TouchableOpacity>
                            
                            <View style={styles.ContainerBtnNext2}>
                                <Text style={styles.TextConfidentialite}>All of your information is confidential</Text>
                                <TouchableOpacity 
                                        style={styles.btnNext2}>
                                        <Text style={styles.textBtnNext2}>Continuer</Text>
                                </TouchableOpacity>
                           </View>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate('Home')}
                                style={styles.btnStart}
                            >
                            </TouchableOpacity>
                        </View>
                    </View>
                </Swiper>   
            </View> 
        );
}
export default ResgisterScreen;
