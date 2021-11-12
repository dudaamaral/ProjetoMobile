import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import MeuComponente from './MeuComponente';
import ComponenteTela from './ComponenteTela';
import Friends from  './Friends';
import Skins from './Skins';
import Friends1 from './Friends1';
import Skins1 from './Skins1';

const Stack = createStackNavigator()
export default function App() {


  return (
    <NavigationContainer> 

    <Stack.Navigator 
    screenOptions ={{
     }}
     initialRouteName='Netflix'>


     
      <Stack.Screen
      options={{headerShown:false}} //escondendo a parte de cima 
      name='Netflix' component={MeuComponente}/>

      <Stack.Screen
     // options={{headerShown:false}} //escondendo a parte de cima 
      name='Friends' component={Friends}/>

      <Stack.Screen
      // options={{headerShown:false}} //escondendo a parte de cima 
      name='Skins' component={Skins}/>

      <Stack.Screen
      // options={{headerShown:false}} //escondendo a parte de cima 
      name='Skins1' component={Skins1}/>

      <Stack.Screen 
      // options={{headerShown:false}}
      name = 'Tela' component = {ComponenteTela}/>

     <Stack.Screen 
      // options={{headerShown:false}}
      name = 'Friends1' component = {Friends1}/>

     </Stack.Navigator>
     
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'red',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 72,
    fontWeight: 'bold',
  },

});
