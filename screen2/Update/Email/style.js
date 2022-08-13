import { colors,mixins } from "../../../styles";
import {StyleSheet } from 'react-native';
import { FontFamily } from "../../../styles/mixins";
export const styles = StyleSheet.create({
  
ContainerParent:{
    backgroundColor:colors.WHITE,
    flex:1,
    padding:15,

},
ContainerParentItem:{
    marginTop:80,
},
ContainerItem:{
    height:50,
    marginHorizontal:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    height:65,
    ...mixins.boxShadow(colors.BLACK),
    margin:5,
    borderRadius:35
},

Icon:{
    marginLeft:15,
    color:colors.PRIMARY 
},
TextIcon:{
    marginLeft:5,
    fontFamily:FontFamily,
    fontSize:16,
    color:colors.GRISE2
},
TextInput:{
    borderColor:"none",
    borderEndWidth:0,
    paddingLeft:15
},
textDescripition:{
    textAlign:"center",
    color:colors.GRISE2,
    fontFamily:FontFamily,
    fontSize:20
}


});