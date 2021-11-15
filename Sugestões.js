import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/connection';
import {Input} from 'react-native-elements/dist/input/Input';
import { render } from 'react-dom';
import { Button } from 'react-native-elements';

export default class Sugestão extends Component {
  render() {
    const{ navigation } = this.props
      return(
        <View style={styles.container}>
          <View style={styles.menuStyle}>
          <Button title ="Home" onPress={()=>
          {navigation.navigate("Netflix")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Skins" onPress={()=>
          {navigation.navigate("Skins")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Friends" onPress={()=>
          {navigation.navigate("Friends1")}} buttonStyle={styles.button1Style}>
          </Button>
          <Button title ="Sugestões" onPress={()=>
          {navigation.navigate("Sugestões")}} buttonStyle={styles.button1Style}>
          </Button>

          </View>

          <View style={styles.titulo}>
            <Text style={styles.text}> DEIXE AQUI SUA SUGESTÃO!</Text>
          {/* <Text style={styles.text}> Aceitamos críticas, mas também não ficamos caladas! </Text> */}

            <View style={styles.suges}>

              <Input placeholder='E-mail' keyboardType='email-address'></Input>
              <Input placeholder='Sugestão' keyboardType='text'></Input>
              <Button title="Enviar" buttonStyle={styles.buttonStyle}></Button>
            </View>

          </View>
        </View>
      );

    
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    alignItems:'center',
    marginBottom: 50,
  },
  menuStyle:{
    display:'flex',
    flexDirection: 'row',
    backgroundColor:'#000',
    gap:'.5rem',
    padding:'1rem'
  },
  button1Style:{
    backgroundColor: 'red',  
    height: 50,
    width: 220,
    margin: 50, 
    textAlign: 'center',
},
buttonStyle: {
  backgroundColor: 'red',  
  height: 50,
  width: 220,
  margin: 50, 
  marginLeft: 200,
  textAlign: 'center',
},


});