
import React from 'react';
import{
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App=() =>{
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        SSupes Mate how are you!!!!!!!!
      </Text>
    
    </View>
  );
};

const styles=StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#0000ff',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#ff00ff',
    fontSize:20,
    fontStyle:'italic'
  }
});



export default App;