import { colors,mixins } from "../../styles";
import { FontFamily } from "../../styles/mixins";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
containerButton:{
    alignItems:"flex-end",
    flex:1,
},
btn:{
    marginHorizontal:1,
    height:50,
    width:170,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.PRIMARY,
    borderRadius:35,
    ...mixins.boxShadow(colors.PRIMARY),
    margin:5,
},
IoniconsIcon2Item:{
    color:colors.WHITE,
    marginLeft:5
},

textContacter:{
    color:colors.WHITE,
    fontFamily:FontFamily,
    fontSize:16,
    fontWeight:"bold"
},
});