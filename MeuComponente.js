import React,{ Component } from 'react'
import { View,Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';





export default class MeuComponente extends Component{

    
    
render(){
    const{ navigation } = this.props

    return(
    
        <View style={styles.container}>

            <Text style={styles.texto}> NETFLIX </Text>
            <Button buttonStyle={styles.button} 
            title = "Entrar" onPress={()=> 
          {navigation.navigate('Tela')}}         /> 
  

        </View>
// push = adicionar elementos 
    );
}}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        },
        texto:{
            color: 'red',
            backgroundColor: 'black',
            textAlign: 'center',
            alignItems: 'center',
            fontSize: 200,
            fontWeight: 'bold'
        },
        button:{
            backgroundColor:'black',
            borderRadius:15,
            width: 100,
            height: 100,
          }

    

});

    