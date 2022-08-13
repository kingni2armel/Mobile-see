import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image} from 'react-native';
import React, { Component,useState} from 'react';
import { styles } from './style';
import { TouchableOpacity } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons'

class SegmentedControle extends Component {

    render(){
        const {text,segment=[]} = this.props
        const [tabIndex, setTabIndex] = React.useState(0)

        return (                 
            <View>
              <Text>{text}</Text>
              <SegmentedControl
                    containerMargin={16}
                    segments={['Villes ', 'Pays']}
                    onChange={(index) => setTabIndex(index)}
                    currentIndex={tabIndex}
                    segmentedControlWrapper={styles.segmentedControlWrapper}
                />
            </View>      
      );
    }
}
export default SegmentedControle

