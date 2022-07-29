import { colors } from "../../styles";
import {StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 195,
    height: 250,
    marginTop:-80,
  },
  titleWlecome:{
    color:colors.PRIMARY,
    fontWeight:'bold',
    marginTop:15,
   

  },
  btnConnect:{
    backgroundColor:colors.PRIMARY,
    borderColor:colors.PRIMARY,
    height:50,
    borderRadius:25,
    width:300,
    marginTop:20,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
},
textConnect:{
    color:colors.WHITE
},
btnSingup:{
    backgroundColor:colors.WHITE,
    borderColor:colors.PRIMARY,
    borderWidth:1,
    borderRadius:25,
    height:50,
    width:300,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
},
textSingup:{
  color:colors.PRIMARY
}



 
 
});
    