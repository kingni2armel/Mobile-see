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
Container:{
    marginHorizontal:1,
    height:50,
    flexDirection:"row",
    backgroundColor:colors.WHITE,
    borderRadius:10,
    ...mixins.boxShadow(colors.BLACK),
    margin:5
},
children:{
    height:50,
    flex:1,
    backgroundColor:colors.GRISE2,
    borderColor:colors.GRISE2
},
children2:{
    height:50,
    flex:1
},
TextChildren1:{
  textAlign:"center",
  marginTop:15,
  fontSize:12,
  fontFamily:"Optima, Regular"
},
TextChildren2:{
    textAlign:"center",
    marginTop:15,
    fontSize:13,
    color:colors.BLACK,
    fontFamily:"Optima, Regular"
  },
  Image:{
    height:50,
    width:25
  },
  Image2:{
    height:30,
    width:20,
    marginTop:5
  },
  Parentchild:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:-5
  },
  Item:{
    margin:5
  },
  ContainerIcon:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginHorizontal:1,
    marginTop:15

  },
  IoniconsIcon1:{
        fontSize:54,
        color:colors.PRIMARY,
        flex:1
  },
  IoniconsIcon2:{
    fontSize:54,
    color:colors.RED,
    flex:1
},
IoniconsIcon3:{
    fontSize:54,
    color:colors.VERT,
    flex:1
},
TextIcon:{
    fontSize:12,
    color:colors.BLACK
},
TextIcon2:{
    fontSize:12,
    color:colors.BLACK,
    marginLeft:9
}

});