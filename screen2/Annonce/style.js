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
    flexDirection:"column",
    padding:10
  
},
ParentContainerHearderItem:{
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
    width:120,
    height:8
}


});