import { colors,mixins } from "../../../styles";

import {StyleSheet } from 'react-native';
import { FontFamily } from "../../../styles/mixins";
export const styles = StyleSheet.create({
  
ContainerParent:{
    backgroundColor:colors.WHITE,
    flex:1,
    paddingTop:10

},
ContainerItem:{
    height:50,
    backgroundColor:colors.OPACITYCOLOR,
    opacity:0.3,
    ...mixins.boxShadow(colors.BLACK),
},
ContainerItem2:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    height:65,
    ...mixins.boxShadow(colors.BLACK),
},
TextCoount:{
    fontWeight:"bold",
    marginLeft:17,
    fontSize:18,
    marginTop:15,
    fontFamily:FontFamily
},
Textbtn:{
    marginLeft:20,
    fontSize:18,
    marginTop:15,
    fontFamily:FontFamily
},
Icon:{

    marginTop:15  
}



});