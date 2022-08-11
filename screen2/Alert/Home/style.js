import { colors,mixins } from "../../../styles";
import {StyleSheet } from 'react-native';
import { FontFamily } from "../../../styles/mixins";
export const styles = StyleSheet.create({
  
ContainerParent:{
    backgroundColor:colors.WHITE,
    flex:1
},
Parent:{
    padding:20
},
ParentItemFirst:{
    alignItems:"flex-end"
},
TextAnnuler:{
    color:colors.PRIMARY,
    fontWeight:"bold",
    fontFamily:FontFamily,
    fontSize:16
},
TextcentreAide:{
    fontSize:22,
    fontWeight:"bold",
    fontFamily:FontFamily,
    color:colors.VIOLET
},
FirstConteiner:{
    flexDirection:"row",
    marginTop:5
},
FirstConteiner2:{
    flexDirection:"row",
    marginTop:15
},
textAstuce:{
        marginLeft:4,
        color:colors.PRIMARY
},
Icon:{
    color:colors.PRIMARY
},
ContainerTextDescription:{
    marginTop:5
},
TextDescription:{
    color:colors.GRISE2,
    fontFamily:FontFamily
},
containerButton:{
    alignItems:"flex-end",
    flex:1,
    marginTop:70
},
btn:{
    marginHorizontal:1,
    height:50,
    width:170,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.PRIMARY,
    borderRadius:35,
    ...mixins.boxShadow(colors.PRIMARY),
    margin:5,
},
textContacter:{
    color:colors.WHITE,
    fontFamily:FontFamily,
    fontSize:16,
    fontWeight:"bold"
},
IoniconsIcon2Item:{
    color:colors.WHITE,
    marginLeft:5
},


ContainerImage:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:60
},
ImageAlert:{
    height:175,
    width:300,
},
ContainerIcon:{
    justifyContent:"center",
    flexDirection:"row",
    marginHorizontal:1,
    marginTop:25

  },

  textAlert:{
    color:colors.BLACK,
    textAlign:"center",
    fontFamily:FontFamily,
    fontSize:16,
    fontWeight:"bold",
    marginLeft:-20,
    marginTop:5
    
  },
  ContainerTextNoAlert:{
        marginTop:40
  },
  TextNoConfiguration:{
    textAlign:"center",
    fontFamily:FontFamily,
    fontSize:12,
    color:colors.GRISE2,
    marginTop:20

  }




});