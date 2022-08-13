import { colors,mixins } from "../../styles";
import { FontFamily } from "../../styles/mixins";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

LabelText:{
    fontSize:13,
    fontWeight:"bold",
    color:colors.BLACK,
    marginTop:3
},
TextMont:{
    marginLeft:9,
    fontSize:14,
    color:colors.GRISE2
},
TextInputstyleDate:{
    margin:5,
    paddingLeft:5
},
containerDatepickerItem:{
    height:40,
    flex:1,
    ...mixins.boxShadow(colors.BLACK),
    margin:5,
    borderRadius:10
},
containerDatepicker:{
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"center",
    height:65,
    flex:1,
},

});