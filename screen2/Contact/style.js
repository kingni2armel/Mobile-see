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
ContainerElementItem1:{
    backgroundColor:colors.PRIMARY,
    // flexDirection:"row",
    flex:1.3,
    height:50,
    borderRadius:35,
    marginTop:5
},
ContainerElementItem2:{
    // flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    height:50,
    borderRadius:35,
    flex:1,
    margin:5
},
TextElement1:{
    textAlign:"center",
    paddingTop:15,
    color:colors.WHITE,
    fontFamily:FontFamily
},
TextElement2:{
    textAlign:"center",
    paddingTop:15,
    color:colors.PRIMARY,
    fontFamily:FontFamily
},
Radius2:{
    borderWidth:1,
    borderColor:colors.WHITE,
    marginLeft:8,
    marginTop:5
},

ContainerElementItem3:{
    backgroundColor:colors.PRIMARY,
    // flexDirection:"row",
    flex:1,
    height:50,
    borderRadius:35,
    marginTop:5
},
ContainerElementItem4:{
    // flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    height:50,
    borderRadius:35,
    flex:1.3,
    margin:5
},
TextElement3:{
    textAlign:"center",
    paddingTop:15,
    color:colors.WHITE,
    fontFamily:FontFamily
},
TextElement4:{
    textAlign:"center",
    paddingTop:15,
    color:colors.PRIMARY,
    fontFamily:FontFamily
},

ContainerElementItem5:{
    backgroundColor:colors.WHITE,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    // flexDirection:"row",
    flex:0.5,
    height:50,
    borderRadius:35,
    marginTop:5
},
ContainerElementItem6:{
    // flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    height:50,
    borderRadius:35,
    flex:0.3,
    margin:5
},
TextElement5:{
    textAlign:"center",
    paddingTop:15,
    color:colors.BLACK,
    fontFamily:FontFamily
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
},
ContainerButton:{
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    flex:1,
    marginTop:15,
    backgroundColor:colors.WHITE,
    height:50,
    width:200,  
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
    fontFamily:FontFamily
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
    height:50,
    width:200,  
    borderRadius:30
},
TextButton2:{
    color:colors.WHITE,
    fontFamily:FontFamily,
    fontSize:18,
    fontWeight:"bold"
}



});