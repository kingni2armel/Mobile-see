import { colors,mixins } from "../../../styles";
import { FontFamily } from "../../../styles/mixins";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.WHITE, 
  },
  TitleSingup:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"row",
    marginTop:20
  },
  Image:{
    height:100,
    width:100,
    borderRadius:100
  },
  ContainerItem:{
    marginHorizontal:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    height:58,
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
ContainerItem3:{
  marginHorizontal:10,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  height:65,
  flex:1,
},
ItemDate:{
  height:40,
  flex:1,
  ...mixins.boxShadow(colors.BLACK),
  margin:5
  
},
IconEdit:{
  color:colors.PRIMARY,
  marginTop:25,
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
TextButton:{
  color:colors.WHITE,
  fontWeight:"bold",
  fontFamily:FontFamily,
  fontSize:20
},
textInput:{
    marginLeft:20,
    fontSize:11
},
countryPicker:{
  marginLeft:15
},
TextInput:{
  paddingLeft:15
},
Itemcountry:{
  marginLeft:15
},
Dropdown:{
  marginLeft:15,
  height:25,
  ...mixins.boxShadow(colors.BLACK),
  margin:5,
  borderRadius:35
},
containerBox:{
  margin:5
}

});
    