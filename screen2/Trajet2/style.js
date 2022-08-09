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
    marginTop:15
  },
  levelStepTitele:{
        marginTop:5
  },
  LabelText:{
        fontSize:13,
        fontWeight:"bold",
        color:colors.BLACK,
        marginTop:3

  },
  Levelstep:{
        height:20,
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
   flex:1,
   marginTop:8
   
},
 
  containerFlexInput:{
        paddingHorizontal:10,
        alignItems:"center",
        height:50,
        flexDirection:"row",
        backgroundColor:colors.WHITE,
        borderRadius:10,
        ...mixins.boxShadow(colors.BLACK),
        marginHorizontal:1
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
        width:110,
        borderRadius:25

   },
   Textbtn:{
        textAlign:"center",
        color:colors.WHITE,
        fontWeight:"bold",
        fontSize:17,
        marginTop:12
   },
   Parent:{
      marginTop:10,
      // borderTopRightRadius,
      // botto
   },
   Textlb:{
      marginRight:5,
      color:colors.GRISE
   },
   Textitem:{
      color:colors.WHITE,
      textAlign:"center",
      marginTop:2,
      fontSize:12
   },
   designCOlor:{
            width:30,
            height:20,
            backgroundColor:colors.PRIMARY,
            borderTopRightRadius:35,
            borderBottomEndRadius:35
   },
   Icon2:{
      color:colors.PRIMARY
   },
   Textlb2:{
      marginLeft:5,
      color:colors.GRISE,
      fontSize:12
   },
   containerFlexInput2:{
      paddingHorizontal:10,
      alignItems:"center",
      height:50,
      flexDirection:"row",
      backgroundColor:colors.WHITE,
      borderRadius:10,
      borderWidth:2,
      borderColor:colors.PRIMARY,
      margin:5
   },
   checkBox:{
      borderRadius:100,
      heigh:8,
      width:8
   },
   Radius2:{
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