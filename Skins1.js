import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React,{ Component } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from 'react-native-elements';


const slides = [
  {
    key:1,
    title:'Episódios Favoritos',
    text: 'Arraste para o lado para conhecer alguns dos meus episódios favoritos da série Skins! ',
    image: require('./assets/effy2.gif'),
    backgroundColor: '#59b2ab',

  },

  {
    key:2,
    title:'"Cassie"',
    text: 'É o 1º episódio da 1ª temporada. Cassie acredita que consegue fazer com que todos pensem que está superando o distúrbio alimentar. Ela encontra conforto em Sid, que gosta de outra pessoa.',
    image: require('./assets/cassie.gif'),
    backgroundColor: '#59b2ab',

  },

  {
    key:3,
    title:'"Freddie"',
    text: 'É o 5º episódio da 4ª temporada. Freddie está completamente apaixonado e curte todos os momentos ao lado de Effy. Juntos, eles aproveitam a vida sem pensar no futuro.',
    image: require('./assets/freddie.gif'),
    backgroundColor: '#59b2ab',

  },
  {
    key:4,
    title:'"Todo mundo"',
    text: 'É o 8º episódio da 5ª temporada. Chega o dia do casamento de Rich e Grace, e os problemas que atormentam a turma podem complicar este que deveria ser um dia feliz.',
    image: require('./assets/gracerich.gif')
  },
  {
    key:'5',
    title:'"Todo mundo"',
    text: 'É o 9º episódio da 1ª temporada. Anwar deve aceitar a religião de sua família e a sexualidade de Maxxie. Sid finalmente percebe que ama Cassie e corre para encontrá-la.',
    image: require('./assets/todomundo.gif')
  },

  
  

]

export default class Skins extends Component {

    
  render(){
    const{ navigation } = this.props
  return (
    
    <View style={{flex:3, backgroundColor:'black'}}>
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
          </View>
      


      <AppIntroSlider
      
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#483D8B',
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
      height:600,
      width:600,
      padding: 10,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',

    }}
    />
    <Text
    style={{
      paddingTop:25,
      paddingBottom:10,
      fontSize:23,
      fontWeight:'bold',
      color: '#483D8B',
      alignSelf:'center'
    }}>
      {item.title}
    </Text>
    <Text
    style={{
      textAlign:'center',
      color:'white',
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

});

