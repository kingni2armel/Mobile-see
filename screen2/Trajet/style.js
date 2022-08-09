import { colors } from "../../styles";

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

  /**** section du swiper 1 */
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
        borderWidth:1,
        paddingLeft:25,
        marginTop:5,
        borderColor:colors.PRIMARY,
    
  },
  TextInputstyleDate:{
    width:80,
    borderWidth:1,
    height:50,


  },


  containerDatepickerItem:{
        margin:15,
     
  },
  containerDatepicker:{
        flexDirection:"row",
  },

  /*** section du swiper 2 */

  containerTextInput2:{
        marginTop:25
  },
  TextInputstyle2:{
    height:50,
    borderWidth:1,
    paddingLeft:25,
    marginTop:5,
    borderRadius:12,
    marginTop:5 
  },
  TextInputstyle2Item:{
    height:50,
    borderWidth:1,
    paddingLeft:25,
    marginTop:5,
    borderRadius:12,
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
        borderRadius:25
  },
  textbtn1:{
        marginTop:16,
        color:colors.PRIMARY,
        textAlign:"center",
        fontWeight:"bold"
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
    fontWeight:"bold"
},




/*** swiper 3 */

TextDescription:{
    fontSize:12,
    marginTop:5
},
ContainerImage:{
    flexDirection:"row",
    justifyContent:"space-around",
    // marginRight:40,
    marginTop:20
},  
ContainerImageItem:{
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:15,
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



// swiper 4


TSS:{
    flex:1
},
parent:{
    display:"flex",
    justifyContent:"flex-end",
    flex:1

},























  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
 
   flex:1,
    backgroundColor:colors.WHITE,
  },
  slideTop:{
    alignItems:'center',
    position:'relative',
    marginTop:182,
  },
  slide2: {
    flex:1,
    backgroundColor:colors.WHITE,
  },
  slide3: {
    flex:1,
    backgroundColor:colors.WHITE,
  },
  dotColor:{
    color:colors.ORANGE
  },

  activeDotStyle:{
    width:15
  },




 
 
});