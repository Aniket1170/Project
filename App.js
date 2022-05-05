
import React, {useState} from 'react';
import{
  StyleSheet,
  View,
  Text,
  Button,
  Linking
} from 'react-native';



const App=() =>{
  const[name,setName]=useState('My Name is')
  const onClickHandler=()=>{
    setName('Ash Ketchum ')
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>
       My Name is{name}!!!!!!!!
      </Text>

      <Button title='update State' onPress={onClickHandler}/>
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
    fontStyle:'italic',
    margin:10
  }
});



export default App;