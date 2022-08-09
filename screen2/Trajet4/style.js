import { colors,mixins } from "../../styles";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
slidecontainer: {
flex: 1,
justifyContent:"flex-end",
backgroundColor:colors.WHITE,
padding:20
},
titleHeader:{
colors:colors.ORANGE,
textAlign:"center",
fontWeight:"bold",
fontSize:22,
},
TrajetTitle:{
fontSize:21,
color:colors.ORANGE,
fontWeight:"bold",
fontFamily:"regular",
marginTop:15,
fontFamily:"Fredoka One, Regular"
},
parent:{
    marginTop:25
},
TextDescription:{
    fontSize:12,
    marginTop:5,
    color:colors.GRISE
},
Icon:{
    color:colors.PRIMARY
},

containerBtn:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:80

},
DescriptionAstuce:{
    color:colors.GRISE,
},
FirstConteiner:{
    flexDirection:"row"
},
textAstuce:{
        marginLeft:4,
        color:colors.PRIMARY
},
btn1:{
    width:120,
    height:50,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:25,
    shadowColor: colors.PRIMARY,
    shadowOffset: {
        height: 1,
        width: 1
    },
    shadowOpacity: 0.80,
    shadowRadius: 3.84,
    elevation: 25,
},
textbtn1:{
    marginTop:16,
    color:colors.PRIMARY,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16
},
btn2:{
    width:120,
    height:50,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:25,
    backgroundColor:colors.PRIMARY
},

textbtn2:{
    marginTop:16,
    color:colors.WHITE,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:16
},
Image:{
    height:80,
    width:100
},
ContainerInput:{
    alignItems:"center",
    marginTop:50
},
TextNonverifie:{
    color:colors.GRISE
}
});