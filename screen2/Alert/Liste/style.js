import { colors,mixins } from "../../../styles";
import { FontFamily } from "../../../styles/mixins";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
Container: {
    flex: 1,
    backgroundColor:colors.WHITE,
},
    slide1:{
    padding:20,
},
ParentItemFirst:{
    alignItems:"flex-end"
},
TextAnnuler:{
    color:colors.PRIMARY,
    fontWeight:"bold",
    fontFamily:FontFamily,
    fontSize:16,
    marginLeft:-20
},
NombreTrajet:{
    fontSize:17,
    color:colors.PRIMARY,
    fontFamily:FontFamily,
    marginTop:-10
},
containerBtn:{
    flexDirection:"row",
    alignItems:"flex-end",
    flex:1,
    marginTop:50
},

ParentContainerHearderItem:{
    flexDirection:"row",
    alignItems:"space-between",
    justifyContent:"center",
    marginTop:50
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
Image2:{
    height:13,
    width:10
},
segmentedControlWrapper:{
    height:50,
    borderRadius:35
},
activeBadgeStyle:{
    height:10,
  
},
componentImage:{
    width:90,
    height:8
},
ImageAvion:{
    height:55,
    width:55
},
ContainerHeaderItem2:{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"flex-start",
   padding:10,
   flex:1
},
ContainerImageAirplane:{
    marginLeft:25,
},
ContainerStatut:{
    flexDirection:"row",
    marginLeft:55,
    marginTop:-25
},
TextStatut:{
    color:colors.VERT,
    fontSize:12
},
TextDatePLustard:{
    fontSize:14,
    color:colors.GRISE2,
    fontFamily:FontFamily,
}
});