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
TrajetTitle:{
    fontSize:21,
    color:colors.PRIMARY,
    fontWeight:"bold",
    fontFamily:"regular",
    marginTop:15
},
ContainerSegment:{
    marginTop:20
},

LabelText:{
    fontSize:13,
    fontWeight:"bold",
    color:colors.BLACK,
    marginTop:3

},
containerItem:{
    margin:5  
},
TextMont:{
    marginLeft:9,
    fontSize:14,
    color:colors.GRISE2
},
TextInputstyle:{
    height:50,
    paddingLeft:10,
    borderColor:"none",
    backgroundColor:colors.WHITE,
    marginVertical:5,
    marginHorizontal:1,
    borderRadius:10,
    ...mixins.boxShadow(colors.BLACK)
},
TextInputstyleItem:{
    flex:1
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
containerFlexInput:{
    paddingHorizontal:10,
    marginHorizontal:1,
    alignItems:"center",
    height:50,
    flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderRadius:10,
    ...mixins.boxShadow(colors.BLACK)
},
Icon:{
    transform:[{rotate:'-90deg'}],
    color:colors.PRIMARY
},
ContainerButton:{
    display:"flex",
    alignItems:"center",
    marginTop:15
},
btnButton:{
    backgroundColor:colors.PRIMARY,
    height:50,
    width:130,
    borderRadius:10,
    marginTop:15

},
Textbtn:{
    textAlign:"center",
    color:colors.WHITE,
    fontWeight:"bold",
    fontSize:14,
    marginTop:14
},
Parent:{
    marginTop:10
},
});