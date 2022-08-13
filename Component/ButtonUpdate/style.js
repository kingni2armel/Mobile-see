import { colors,mixins } from "../../styles";
import { FontFamily } from "../../styles/mixins";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    ContainerButton:{
        height:50,
        marginHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:65,
        backgroundColor:colors.PRIMARY,
        margin:5,
        borderRadius:35,
        marginTop:25
    },
    TextButton:{
        color:colors.WHITE,
        fontWeight:"bold",
        fontFamily:FontFamily,
        fontSize:20
    }

});