import { colors,mixins } from "../../../styles";
import {StyleSheet } from 'react-native';
import { FontFamily } from "../../../styles/mixins";
export const styles = StyleSheet.create({
  
ContainerParent:{
    backgroundColor:colors.WHITE,
    flex:1,
    padding:15,

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
ContainerItem2:{
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
Icon:{
    marginLeft:15
},
TextIcon:{
    marginLeft:5,
    fontFamily:FontFamily,
    fontSize:16,
    color:colors.GRISE2
},
TextButton:{
    color:colors.WHITE,
    fontWeight:"bold",
    fontFamily:FontFamily,
    fontSize:20
},
TextInput:{
    borderColor:"none",
    borderEndWidth:0,
    paddingLeft:15
}


});