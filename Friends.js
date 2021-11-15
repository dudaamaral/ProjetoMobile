import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React,{ Component } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button} from 'react-native-elements';

const slides = [
  {
    key:1,
    title:'Episódios Favoritos',
    text: 'Arraste para o lado para conhecer alguns dos meus episódios favoritos da série Friends! ',
    image: require('./assets/friends 1.gif'),
    backgroundColor: '#59b2ab',

  },

  {
    key:2,
    title:'"Aquele em que Todos Fazem 30 Anos"',
    text: 'É o 14º episódio da 7ª temporada de Friends. A celebração do aniversário de 30 anos de Rachel faz com que todos os amigos recordem dos seus aniversários de 30 anos.',
    image: require('./assets/friends 2.png'),
    backgroundColor: '#59b2ab',

  },

  {
    key:3,
    title:'"Aquele com o pedido de casamento"',
    text: 'É o 25º episódio da 6ª temporada. Richard diz a Monica que ainda a ama. A tentativa de Chandler de surpreendê-la ao pedir sua mão a faz pensar que ele não quer se casar com ela.',
    image: require('./assets/friends 3.png'),
    backgroundColor: '#59b2ab',

  },
  {
    key:4,
    title:'"Aquele onde Phoebe corre"',
    text: 'É o 6º episódio da 7ª temporada. Phoebe corre de um jeito desengonçado, e Rachel tem vergonha de ser vista correndo com ela.',
    image: require('./assets/friends 4.gif')
  },
  {
    key:'5',
    title:'"Aquele em que Joey Perde o Seguro"',
    text: 'É o 6º episódio da 4ª temporada. Joey desenvolve uma hérnia, mas não tem convênio médico para ir ao hospital. Ross finge ter um sotaque britânico ao lecionar para uma nova turma.',
    image: require('./assets/friends 5.png')
  },

  
  

]

export default class Friends extends Component {

    
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
          <Button title ="Sugestões" onPress={()=>
          {navigation.navigate("Sugestões")}} buttonStyle={styles.button1Style}>
          </Button>


        </View>

      <AppIntroSlider
      
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'red',
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
      color: 'red',
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
    display: 'flex',
    justifyContent: 'start',
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
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
    marginLeft: 200,
    marginRight: 10,
    backgroundColor: 'red',  
    height: 50,
    width: 220,
    margin: 50, 
    textAlign: 'center',
},


});