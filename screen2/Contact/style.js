import { colors,mixins } from "../../styles";

import {StyleSheet } from 'react-native';
import { FontFamily } from "../../styles/mixins";
export const styles = StyleSheet.create({
  
ContainerParent:{
    backgroundColor:colors.GRISE3,
    flex:1
},
slidecontainer: {
    flex: 1,
    justifyContent:"flex-end",
    padding:20,
    backgroundColor:colors.GRISE3,
},

Container:{
    marginHorizontal:1,
    height:50,
    flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderRadius:10,
    ...mixins.boxShadow(colors.BLACK),
    margin:5,
},
ContainerHeader:{
    flexDirection:"row",
    justifyContent:"space-between"
},
containerCity:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15
},
TextFirst:{
    fontSize:15,
    color:colors.GRISE2
},
date:{
    fontSize:18
},
pays:{
    color:colors.GRISE2,
    fontSize:14
},
Info:{
    flexDirection:"row",
    marginTop:15
},
Info2:{
    flexDirection:"row",
    marginTop:50
},
Icon:{
    color:colors.PRIMARY
},
TextInfo:{
    color:colors.PRIMARY,
    marginLeft:8,
    fontFamily:FontFamily
},
Description:{
    fontFamily:FontFamily,
    color:colors.GRISE2,
    fontFamily:11,
    marginTop:8
},
TextSelection:{
    marginTop:5
},

// style du premier content
ContainerElement:{
    flexDirection:"row",
    justifyContent:"space-Around",
    flex:1,
 
},

TextElement:{
    textAlign:"center",
    padding:15,
    color:colors.WHITE,
    fontFamily:FontFamily
},

Radius2:{
    borderWidth:1,
    borderColor:colors.WHITE,
},

ContainerElementItem:{
    backgroundColor:colors.PRIMARY,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    height:50,
    borderRadius:35,
    margin:10
},

ContainerElementLast:{
    flexDirection:"row",
    justifyContent:"flex-start",
    flex:1,
},
TextSouhait:{
    marginTop:8,
    fontFamily:FontFamily
},
ParentContainerButton:{
    alignItems:"center",
    flex:1,
    height:50,
},
ContainerButton:{
    justifyContent:"space-around",
    width:200,  
    height:50,
    marginTop:15,
    backgroundColor:colors.WHITE,
    alignItems:"center",
    flexDirection:"row",
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:30
},
ParentTextButton:{
    marginTop:8
},
TextButton:{
    color:colors.PRIMARY
},
IconeSingne:{
    color:colors.PRIMARY
},
containerText:{
    flexDirection:"row"
},
Prix:{
    color:colors.PRIMARY,
    fontFamily:FontFamily
},
TextSouhaits:{
    fontFamily:FontFamily,
    marginLeft:1
},
ContainerButton2:{
    justifyContent:"center",
    alignItems:"center",
},
Button2:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginTop:15,
    backgroundColor:colors.PRIMARY,
    height:60,
    width:200,  
    borderRadius:30
},
TextButton2:{
    color:colors.WHITE,
    fontFamily:FontFamily,
    fontSize:18,
    fontWeight:"bold"
},
containerItem:{
    flexDirection:"row",
    alignItems:"flex-start",
    flex:1,
    flexWrap:"wrap"
}



});