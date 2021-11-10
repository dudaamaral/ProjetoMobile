import React,{ Component } from 'react'
import { View,Text, Button, StyleSheet} from 'react-native';



export default class MeuComponente extends Component{


    // constructor(props){
    //     super(props);
    //     const {texto} = this.props.route.params.params;
    //     this.state = {texto}; 
    // }
render(){
    const{ navigation } = this.props

    return(
    
        <View style={styles.container}>

            <Text style={styles.texto}> NETFLIX </Text>
            <Button title = "Entrar" onPress={()=> 
          {navigation.navigate("Tela", {
              params: {texto:"Eduarda Amaral"}
          })
        
        }}         /> 
  

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
            fontSize: 72,
            fontWeight: 'bold'
        }

    

});

    