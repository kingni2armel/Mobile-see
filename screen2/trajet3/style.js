import { colors,mixins } from "../../styles";

import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
container: {
    flex: 1,
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

TextDescription:{
    fontSize:12,
    marginTop:5,
    color:colors.GRISE
},
ContainerImage:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:25
},  
ContainerImageItem:{
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:25,
    height:130,
    width:150,
    margin:5
},
Image:{
    height:57,
    width:78,
    marginLeft:40,
    marginTop:18
},

titleImage:{
        textAlign:"center",
        marginTop:15
},
titleImage2:{
    textAlign:"center"
},
Containercheckbox:{
    flexDirection:"row"
},
TextCheck:{
    marginTop:20,
    marginLeft:-10,
    fontSize:12
},
CheckBox:{
    width:20,
    borderWidth:1,
    borderColor:colors.PRIMARY
},
containerBtn:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:15

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
});