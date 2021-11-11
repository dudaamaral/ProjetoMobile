import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React,{ Component } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key:1,
    title:'Episódios Favoritos',
    text: 'mkfmadfjadn',
    image: require('./assets/dude.jpg'),
    backgroundColor: '#59b2ab',

  },

  {
    key:2,
    title:'Episódios Favoritos',
    text: 'mkfmadfjadn',
    image: require('./assets/alicia.jpeg'),
    backgroundColor: '#59b2ab',

  },

  {
    key:3,
    title:'Episódios Favoritos',
    text: 'mkfmadfjadn',
    image: require('./assets/alicia.jpeg'),
    backgroundColor: '#59b2ab',

  },
  {
    key:4,
    title:'Episódios Favoritos',
    text: 'mkfmadfjadn',
    image: require('./assets/alicia.jpeg')
  },
  {
    key:'5',
    title:'Episódios Favoritos',
    text: 'mkfmadfjadn',
    image: require('./assets/alicia.jpeg')
  },

  
  

]

export default class Friends extends Component {

    
  render(){
  return (
    
    <View style={{flex:1}}>

      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#009cff',
          width: 30
        }}
        />
        
      

      </View>
      

    
  );
}
}

function  renderSlides ({ item }){
  return(
    <View>
    <Image
    source={item.image}
    style={{
      // resizeMode:'cover',
      height:'100%',
      width:'100%',
      padding: 10,
      alignItems:'center',
    }}
    />
    <Text
    style={{
      paddingTop:25,
      paddingBottom:10,
      fontSize:23,
      fontWeight:'bold',
      color: 'red',
      alignSelf:'center'
    }}>
      {item.title}
    </Text>
    <Text
    style={{
      textAlign:'center',
      color:'#000',
      paddingHorizontal:25,
      fontSize: 15
    }}
    >
      {item.text}
    </Text>
    </View>
  );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    alignItems:'center'
  },

});