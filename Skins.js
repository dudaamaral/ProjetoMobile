import React,{ Component } from 'react'
import { View,Text, Button, StyleSheet, ImageBackground,Image} from 'react-native';



export default class Skins extends Component{
    render() {

        return (
          <View style={styles.container}>
            <ImageBackground
            source={require('./assets/skins.jpeg')}
            style={styles.imagemFundo} > 
            </ImageBackground>

          </View>

        );
    
}

}
const styles = StyleSheet.create({
    titulo: {
      fontSize: 70,
      marginBottom: 40,
      marginTop: 1,
      color: 'white',
  
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: "center",
      alignItems: 'center',
      textAlign: 'center',
    },
    imagemFundo:{
        height:'100%',
        width:'100%',
        opacity:'10%',
    },
    // topo:{
   // height:'50%',
    //width:'50%',
    // }
  });