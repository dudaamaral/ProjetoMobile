import React,{ Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {Button} from 'react-native-elements';

export default class Skinks extends Component{
    render() {
      const{ navigation } = this.props

        return (
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


        </View>
            <ImageBackground
            source={require('./assets/skins12.jpg')}
            style={styles.imagemFundo}>

            <View style={[styles.caixa, styles.elevation]}>
            <Text style={styles.text}>･*:.｡.･SKINS.･.｡.:*･</Text>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <Text style={styles.text}> Skins é um drama teen inglês que focaliza em um grupo de adolescentes, que mora na cidade de Bristol. A série mostra as angústias dos personagens e os seus problemas pessoais, enquanto eles precisam lidar com questões relacionadas a raça, religião, sexualidade, drogas e transtornos alimentares.</Text> 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <Text style={styles.text}> Aperte no botão abaixo e veja alguns dos meus episódios favoritos! </Text>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

            <Button  buttonStyle={styles.button} title = "Aperte aqui!" onPress={()=> 
            {navigation.navigate("Skins1")}}/>
            </View>
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
        // opacity:'10%',
    },
    caixa: {
      backgroundColor: 'grey',
      justifyContent: 'center',
      height: 600,
      width: 600,
      borderRadius: 20,
      alignSelf:'center',
      opacity:'80%',
      resizeMode: "center",
      marginBottom: 10,
    },
    elevation: {
      height: 600,
      width: 600,
      shadowColor: '#0c0c0c',
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      resizeMode: "center",
      marginBottom: 100,
      margin:70,
  
    },
    text: {
      color: '#DCDCDC',
      fontFamily: 'Century Gothic',
      fontSize: 25,
    },
    button: {
      backgroundColor: '#363636',
      borderRadius: 15,
      width: 100,
      height: 60,
    },
    button1Style:{
      backgroundColor: 'red',  
      height: 50,
      width: 220,
      margin: 50, 
      textAlign: 'center',
  },
    menuStyle:{
      display:'flex',
      flexDirection: 'row',
      backgroundColor:'#000',
      gap:'.5rem',
      padding:'1rem'
    }
  });